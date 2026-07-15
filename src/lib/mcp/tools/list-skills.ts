import { defineTool } from "@lovable.dev/mcp-js";

const skills = [
  "Product Roadmapping",
  "MVP Strategy",
  "Product Discovery",
  "PRDs & Specs",
  "Payment Systems",
  "API Design",
  "Alternative Payment Methods (APM)",
  "Embedded Finance",
  "SoftPOS",
  "KYC/AML",
  "Scrum Master",
  "Sprint Planning",
  "Jira",
  "Figma",
  "Confluence",
  "Mixpanel",
  "Postman",
];

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Return the portfolio owner's product management skills and tools.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: skills.join(", ") }],
    structuredContent: { skills },
  }),
});