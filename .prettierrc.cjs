module.exports = {
  printWidth: 120,
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
  importOrder: [
    "^next/(.*)$",
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@svgs/(.*)$",
    "^@components/(.*)$",
    "^@hooks/(.*)$",
    "^@utils/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx"],
};
