module.exports = {
    locales: {
        "/en/": {
            lang: "en-US",
            title: "宠物百科",
            description: "养宠知识、心得、评测等，为了每只可爱的小动物～"
        },
        "/": {
            lang: "zh-CN",
            title: "宠物百科",
            description: "养宠知识、心得、评测等，为了每只可爱的小动物～"
        }
    },
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/x-icon",
                href: "./favicon.ico"
            }
        ],
        ["link", { rel: "apple-touch-icon", href: "./favicon.ico" }]
    ],
    base: "/",
    themeConfig: {
        locales: {
            "/en/": {
                selectText: "Languages",
                label: "English",
                ariaLabel: "Languages",
                editLinkText: "Edit this page on GitHub",
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: "Nested", link: "/nested/", ariaLabel: "Nested" }
                ],
                sidebar: {
                    "/": [
                        /* ... */
                    ],
                    "/nested/": [
                        /* ... */
                    ]
                }
            },
            "/": {
                // 多语言下拉菜单的标题
                selectText: "选择语言",
                // 该语言在下拉菜单中的标签
                label: "简体中文",
                // 编辑链接文字
                editLinkText: "在 GitHub 上编辑此页",
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                displayAllHeaders: true,
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: "百科", link: "/zh/百科/" },
                    { text: "推荐", link: "/zh/推荐/" },
                    {
                        text: "github",
                        link: "https://github.com/hc1998/Awsome-Pet",
                        target: "_blank",
                        rel: ""
                    }
                ],
                sidebar: {
                    "/zh/百科": [
                        {
                            title:'前端',
                            collapsable: true,
                            children:[
                                ''
                            ]
                        }
                    ]
                }
            }
        }
    }
};
