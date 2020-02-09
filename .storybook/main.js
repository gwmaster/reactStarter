const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.less$/,
            loaders: [
                'style-loader',
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        modifyVars: {},
                        javascriptEnabled: true
                    }
                }
            ],
            include: [
                path.resolve(__dirname, '../src'),
                /[\\/]node_modules[\\/].*antd/
            ]
        });
        console.log('less config')
        // Return the altered config
        return config;
    },
};



