module.exports = {
    jsx: {
        babelConfig: {
            plugins: [
                [
                    '@svgr/babel-plugin-remove-jsx-attribute',
                    {
                        elements: ['path'],
                        attributes: ['fill'],
                    },
                ],
            ],
        },
    },
}
