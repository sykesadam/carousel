/** @type {import('prettier').Config} */
module.exports = {
	endOfLine: "lf",
	semi: false,
	singleQuote: false,
	tabWidth: 4,
	useTabs: true,
	trailingComma: "es5",
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"<THIRD_PARTY_MODULES>",
		"^types$",
		"",
		"^[./]",
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderBuiltinModulesToTop: true,
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,
	plugins: ["@ianvs/prettier-plugin-sort-imports"],
}
