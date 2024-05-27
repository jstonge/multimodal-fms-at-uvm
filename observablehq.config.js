// See https://observablehq.com/framework/config for documentation.
export default {
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  title: "Hello multimodal Fms",
  pages: [
    {
      name: "Preliminaries",
      open: true,
      pager: "preliminaries",
      pages: [
        { name: "Week 1", path: "preliminaries/week-1" },
      ]
    },
    {
      name: "Papers deep dive",
      open: false,
      pager: "papers",
      pages: [
        { name: "Bao2021BEiTBP", path: "papers/Bao2021BEiTBP" },
      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  footer: "Built with Observable.", // what to show in the footer (HTML)
  style: "style.css"
};
