module.exports = {
    base: '/vue-ui/',
    title: 'Roxas UI',
    description: '一个基于Vue简单好用的UI库',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/get-started/']
            },
            {
                title: '组件',
                children: [
                    '/components/layout',
                    '/components/grid',
                    '/components/button',
                    '/components/input',
                    '/components/tab',
                    '/components/collapse',
                    '/components/toast',
                    '/components/popover',
                ]
            }
        ]
    }
}