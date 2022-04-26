const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/preset-create-react-app',
    // nomodule
    {
      name: `@storybook/preset-scss`,
      options: {
          rule: {
              test: /(?<!\.module).s[ca]ss$/,
          }
      },
  },
  // module
  {
      name: `@storybook/preset-scss`,
      options: {
          rule: {
              test: /\.module\.s[ca]ss$/,
          },
          cssLoaderOptions: {
              modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
              },
          }
      },
  },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
}