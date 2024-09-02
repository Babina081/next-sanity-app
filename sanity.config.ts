import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "tywlet8z",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-09-01",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
export default config;
