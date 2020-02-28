const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/preset-scss',
        '@storybook/preset-typescript',
    ],
};