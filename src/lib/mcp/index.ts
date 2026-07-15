import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listCaseStudiesTool from "./tools/list-case-studies";
import listSkillsTool from "./tools/list-skills";

export default defineMcp({
  name: "oluwabusola-portfolio-mcp",
  title: "Oluwabusola Noah Ruth Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for exploring Oluwabusola Noah Ruth's product management portfolio. Use `get_profile` for contact and identity, `list_case_studies` for the three fintech PM case studies (Pay with Transfer, MID Orchestration, Merchant Onboarding), and `list_skills` for skills and tools.",
  tools: [getProfileTool, listCaseStudiesTool, listSkillsTool],
});