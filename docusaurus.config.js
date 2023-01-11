// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "学术悟道",
    tagline: "道、法、术、器、势、志",
    url: "https://01ism.github.io", // todo x: update
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "01ism", // todo x: Usually your GitHub org/user name.
    projectName: "01ism.github.io", // todo x: Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN", "en", "fr"],

        // localeConfigs: {
        //     "zh-CN": {
        //         label: '中文(简体)',
        //         direction: 'ltr',
        //         htmlLang: 'zh-CN',
        //         calendar: 'gregory',
        //         path: 'zh-CN',
        //     },
        //
        //     fr: {
        //         label: 'French',
        //         direction: 'ltr',
        //         htmlLang: 'fr',
        //         calendar: 'gregory',
        //         path: 'fr',
        //     },
        // },


    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },

                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },

                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "学术悟道", // todo x
                logo: {
                    alt: "Logo",
                    src: "img/logo.svg",
                },
                items: [
                    // TODO X: 教程
                    // {
                    //   type: "doc",
                    //   docId: "intro",
                    //   position: "left",
                    //   label: "教程",
                    // },

                    //
                    // todo x: 使用自定义导航栏, 参见 sidebars.js
                    //

                    // todo x: 道
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "tao",
                        label: "道",
                    },
                    // todo x: 法
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "law",
                        label: "法",
                    },
                    // todo x: 术
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "skill",
                        label: "术",
                    },
                    // todo x: 器
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "tool",
                        label: "器",
                    },

                    // todo x: 生态
//                    {
//                        type: "docSidebar",
//                        position: "left",
//                        sidebarId: "ecosystem",
//                        label: "生态",
//                    },

                    // TODO X: 博客
                    {to: "/blog", label: "博客", position: "left"},


                    // todo x: Discord
                    {
                        href: "https://discord.com/invite/WF6mmvXKcb",
                        label: "Discord",
                        position: "right",
                    },

                    // todo x: Github
                    {
                        href: "https://github.com/01ism",
                        label: "GitHub",
                        position: "right",
                    },

                    // todo x: 多语言
                    {
                        type: "localeDropdown",
                        position: "right",
                        dropdownItemsAfter: [
                            {
                                type: "html",
                                value: '<hr style="margin: 0.3rem 0;">',
                            },
                            {
                                href: "https://github.com/better-rs",
                                label: "Help Us Translate",
                            },
                        ],
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "docs/tao/index",
                            },
                            {
                                label: "Ecosystem",
                                to: "docs/ecosystem/index",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/WF6mmvXKcb",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/gossip_coder", // todo x:
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/01ism", // todo x
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} 01ism. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['powershell', 'rust', 'c', 'python'],
            },
        }),
};

module.exports = config;
