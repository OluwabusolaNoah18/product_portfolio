import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return the portfolio owner's name, current role, tagline, and contact links (email, LinkedIn, resume).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Oluwabusola Noah Ruth",
      role: "Product Manager & Scrum Master",
      tagline:
        "Product Manager building products that ship, scale, and users love.",
      focus: "Fintech, payments, and platform products. Growing into healthtech.",
      email: "noaholuwabusola3@gmail.com",
      linkedin: "https://www.linkedin.com/in/oluwabusola-noah",
      resume:
        "https://drive.google.com/drive/folders/1nHpULQOdzAYnsSXycSJV2xvc-qaWlHwx?usp=drive_link",
      website: "https://noaholuwabusola.lovable.app",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});