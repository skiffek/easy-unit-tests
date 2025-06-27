import markdownItInclude from "markdown-it-include";
import markdownItPlantuml from "markdown-it-plantuml";

export default {
  inputDir: "./docs/",
  output: "./out/",
  engine: ({ marp }) =>
    marp.use(markdownItInclude, { root: `./docs/` }).use(markdownItPlantuml),
};
