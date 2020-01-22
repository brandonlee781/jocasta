const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    '@storybook/addon-knobs/register',
    '@storybook/addon-queryparams',
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};
