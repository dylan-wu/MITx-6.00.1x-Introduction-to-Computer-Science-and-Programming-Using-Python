module.exports = ctx => ({
  title: "MITx 6.00.1 Intro CS with Python",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Home",
        path: "/"
      },
      {
        title: "Study Guide",
        collapsable: true,
        path: "/study-guide/",
        sidebarDepth: 1,
      },
      {
        title: "Week 1: Python Basics",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ["/1-introduction-to-python/", "1. Introduction to Python"],
          ["/2-core-elements-of-programs/", "2. Core Elements of Programs"],
          ["/problem-set-1", "Problem Set One"]
        ]
      },
      {
        title: "Week 2: Simple Programs",
        collapsable: true,
        sidebarDepth: 1,
        children: []
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
});
