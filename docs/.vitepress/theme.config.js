module.exports = {
    sidebar: {
        '/games/': [
            {
                text: 'Guide',
                collapsible: true,
                items: [
                    // This shows `/guide/index.md` page.
                    {text: 'Guid', link: '/games/'}, // /guide/index.md
                    {text: 'Index', link: '/games/g1'}, // /guide/index.md
                    {text: 'One', link: '/games/g2'}, // /guide/one.md
                ]
            }
        ],
    }
}