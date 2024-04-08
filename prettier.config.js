/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
  useTabs: true,
  tabWidth: 4,
  semi: false,
  printWidth: 120
};

export default config;
