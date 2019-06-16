"use strict";
// Util methods
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = {
    orderBy: "asc",
    isCaseSensitive: false
};
const sanitizeOptions = (options) => {
    if (options === undefined) {
        console.log(`Sorting with default order by ${defaultOptions.orderBy}
Sorting with default case sensitive ${defaultOptions.isCaseSensitive}`);
        return defaultOptions;
    }
    if (options.orderBy === undefined) {
        options.orderBy = defaultOptions.orderBy;
        console.log(`Sorting with default order by ${options.orderBy}`);
    }
    else if (options.orderBy !== "asc" && options.orderBy !== "desc") {
        console.log(`${options.orderBy} not supported. Use 'asc' or 'desc'.
Sorting with default orderBy ${defaultOptions.orderBy}`);
        options.orderBy = defaultOptions.orderBy;
    }
    else {
        console.log(`Sorting with custom order by ${options.orderBy}`);
    }
    if (options.isCaseSensitive === undefined) {
        options.isCaseSensitive = defaultOptions.isCaseSensitive;
        console.log(`Sorting with default case sensitive ${options.isCaseSensitive}`);
    }
    else {
        console.log(`Sorting with custom case sensitive ${options.isCaseSensitive}`);
    }
    return options;
};
const getSortAlgorithm = (order, isCaseSensitive) => {
    switch (order) {
        case "desc":
            return isCaseSensitive
                ? (a, b) => convertToAscii(b)
                    .toString()
                    .localeCompare(convertToAscii(a).toString())
                : (a, b) => b.toLowerCase().localeCompare(a.toLowerCase());
        default:
            return isCaseSensitive
                ? (a, b) => convertToAscii(a)
                    .toString()
                    .localeCompare(convertToAscii(b).toString())
                : (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
    }
    function convertToAscii(text) {
        return text
            .split("")
            .map(char => {
            return char.charCodeAt(0);
        })
            .reduce((current, previous) => {
            return previous + current;
        });
    }
};
// Basic string Array sort
exports.sortStrings = (stringArray, options) => {
    const _options = sanitizeOptions(options);
    const _arrayCopy = stringArray.slice();
    const _order = _options.orderBy !== undefined ? _options.orderBy : "asc";
    const _isCaseSensitive = _options.isCaseSensitive !== undefined ? _options.isCaseSensitive : true;
    console.log(`Case Sensitive: ${_isCaseSensitive}, order: ${_order}`, _arrayCopy.sort(getSortAlgorithm(_order, _isCaseSensitive)));
    console.log("");
    return _arrayCopy;
};
//# sourceMappingURL=index.js.map