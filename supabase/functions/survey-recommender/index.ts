import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 2000;
const ALLOWED_ROLES = new Set(["user", "assistant"]);

const systemPrompt = `You are a friendly survey advisor for Victory Surveys, an RPSA-regulated surveying firm. Your job is to help homebuyers choose the right survey by asking them questions one at a time.

You must recommend ONE of these survey types:
1. **Home Buyer / Condition Survey** – For modern, standard construction properties that aren't too big or complicated. Includes colour-coded condition ratings, photographs, jargon-free reporting, and a full debrief.
2. **Building Survey** – For larger, more complex, older, extended, or higher-value homes. The most comprehensive survey available with detailed construction descriptions and repair guidance.
3. **Buy To Let Survey** – ONLY for properties that are or will be let to tenants. Includes HHSRS hazard review and DASH report. Only available from RPSA members.
4. **New-build Snagging Inspection** – For newly constructed homes only. Identifies finishing quality issues and incomplete works.
5. **Property Consultancy** – For bespoke needs like advice on defects, development potential, or specialist guidance.

Ask questions ONE AT A TIME. Keep them short and conversational. Key things to find out:
- Is the property new-build or existing?
- Is it being bought to live in or to let?
- How old/complex is the property?
- Is the property large, listed, extended, or unusual construction?
- Any specific concerns?

After 3-5 questions (when you have enough info), give your recommendation. Format your final recommendation like this:

"Based on what you've told me, I'd recommend a **[Survey Name]**. [Brief reason why]."

Then add on a new line: RECOMMENDED_SURVEY:[exact survey name]

Where the exact survey name is one of:
- Home Buyer / Condition Survey
- Building Survey
- Buy To Let Survey
- New-build Snagging Inspection
- Property Consultancy

Be warm, professional, and reassuring. Keep responses concise (2-3 sentences max per message).`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify the caller is using the Supabase anon key
    const apiKeyHeader = req.headers.get("apikey");
    const expectedAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    if (!apiKeyHeader || apiKeyHeader !== expectedAnonKey) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { messages } = body;

    // Validate messages array
    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Bad request: messages must be an array" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize: filter roles, cap count and length
    const safeMessages = messages
      .filter((m: unknown) => {
        if (!m || typeof m !== "object") return false;
        const msg = m as Record<string, unknown>;
        return typeof msg.role === "string" && ALLOWED_ROLES.has(msg.role) && typeof msg.content === "string";
      })
      .slice(0, MAX_MESSAGES)
      .map((m: Record<string, unknown>) => ({
        role: m.role as string,
        content: String(m.content).slice(0, MAX_CONTENT_LENGTH),
      }));

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            ...safeMessages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("survey-recommender error:", e);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});