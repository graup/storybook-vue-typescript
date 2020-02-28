const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/preset-scss',
        {
            name: '@storybook/preset-typescript',
            options: {
                tsLoaderOptions: {
                    configFile: path.resolve(__dirname, '../tsconfig.json')
                },
            },
        }
    ]
};