import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, "1 h"),
        analytics: true,
      })
    : null;

const FORM_CONFIG: Record<
  string,
  { to: string[]; subject: string; buildBody: (d: Record<string, string>) => string }
> = {
  schedule: {
    to: ["Frontdesk@westcoastcustoms.com"],
    subject: "Schedule Visit Inquiry",
    buildBody: (d) =>
      `Schedule Visit Inquiry

Name: ${d.name}
Email: ${d.email}
Phone: ${d.phone}`,
  },
  event: {
    to: ["events@westcoastcustoms.com"],
    subject: "Event Space Rental Inquiry",
    buildBody: (d) =>
      `Event Space Rental Inquiry

Name: ${d.name}
Phone: ${d.phone}
Email: ${d.email}

Date and details:
${d.eventDetails}`,
  },
  storage: {
    to: ["sales@westcoastcustoms.com", "info@westcoastcustoms.com"],
    subject: "Premium Storage Concierge Inquiry",
    buildBody: (d) =>
      `Premium Storage Concierge Inquiry

Name: ${d.name}
Vehicle: ${d.vehicle}
Email: ${d.email}
Phone: ${d.phone}`,
  },
  "custom-build": {
    to: ["sales@westcoastcustoms.com", "info@westcoastcustoms.com"],
    subject: "Custom Build Inquiry",
    buildBody: (d) =>
      `Custom Build Inquiry

Name: ${d.firstName} ${d.lastName}
Organization: ${d.organization}
Address: ${d.streetAddress}, ${d.city}, ${d.state}
Phone: ${d.phone}
Email: ${d.email}
Year/Make/Model: ${d.yearMakeModel}
Current Color: ${d.currentColor}
Investment Range: ${d.investRange}

Services:
Exterior: ${d.exterior}
Interior: ${d.interior}
Engine: ${d.engine}
Suspension: ${d.suspension}
Wheels/Rims: ${d.wheelsRims}
Tires: ${d.tires}
Performance: ${d.performance}

More Info: ${d.moreInfo}`,
  },
  academy: {
    to: ["academy@westcoastcustoms.com"],
    subject: "West Coast Customs Academy Inquiry",
    buildBody: (d) =>
      `West Coast Customs Academy Inquiry

Name: ${d.name}
Passion: ${d.passion}
Email: ${d.email}
Phone: ${d.phone}`,
  },
};

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const json = await request.json();
    const { formType, formData, attachments } = json as {
      formType: string;
      formData: Record<string, string>;
      attachments?: Array<{ filename: string; content: string }>;
    };

    // Rate limit (optional - only when Upstash is configured)
    if (ratelimit) {
      const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "anonymous";
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return Response.json(
          { error: "Too many submissions. Please try again later." },
          { status: 429 }
        );
      }
    }

    const config = FORM_CONFIG[formType];
    if (!config) {
      return Response.json({ error: "Invalid form type" }, { status: 400 });
    }

    const body = config.buildBody(formData);
    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    const resendAttachments =
      Array.isArray(attachments) && attachments.length > 0
        ? attachments
            .filter((a): a is { filename: string; content: string } => Boolean(a?.filename && a?.content))
            .slice(0, 10)
            .map((a) => ({
              filename: a.filename,
              content: Buffer.from(a.content, "base64"),
            }))
        : undefined;

    const { data, error } = await resend.emails.send({
      from,
      to: config.to,
      subject: config.subject,
      text: body,
      ...(resendAttachments?.length ? { attachments: resendAttachments } : {}),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Send email error:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to send email" },
      { status: 500 }
    );
  }
}
