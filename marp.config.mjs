import markdownItInclude from "markdown-it-include";
import markdownItPlantuml from "markdown-it-plantuml";

export default {
  inputDir: "./",
  engine: ({ marp }) => marp.use(markdownItInclude).use(markdownItPlantuml),
};
