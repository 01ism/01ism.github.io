/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  //
  // todo x: 自定义导航栏(文件夹在 docs 内)
  //

  // todo x: 路径是 docs/guide
  guide: [{ type: "autogenerated", dirName: "00-guide" }],

  // todo x: 路径是 docs/law
  tao: [{ type: "autogenerated", dirName: "01-tao" }],

  // todo x: 路径是 docs/law
  law: [{ type: "autogenerated", dirName: "02-law" }],

  // todo x: 路径是 docs/skill
  skill: [{ type: "autogenerated", dirName: "03-skill" }],

  // todo x: 路径是 docs/tool
  tool: [{ type: "autogenerated", dirName: "04-tool" }],

  // todo x: 路径是 docs/ecosystem
  ecosystem: [{ type: "autogenerated", dirName: "05-ecosystem" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
