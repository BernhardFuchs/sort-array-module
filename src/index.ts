// Util methods

interface SortingOptions {
  orderBy?: string;
  isCaseSensitive?: boolean;
}

const defaultOptions: SortingOptions = {
  orderBy: "asc",
  isCaseSensitive: false
};

const sanitizeOptions = (
  options: SortingOptions | undefined
): SortingOptions => {
  if (options === undefined) {
    console.log(
      `Sorting with default order by ${defaultOptions.orderBy}
Sorting with default case sensitive ${defaultOptions.isCaseSensitive}`
    );
    return defaultOptions;
  }

  if (options.orderBy === undefined) {
    options.orderBy = defaultOptions.orderBy;
    console.log(`Sorting with default order by ${options.orderBy}`);
  } else if (options.orderBy !== "asc" && options.orderBy !== "desc") {
    console.log(`${options.orderBy} not supported. Use 'asc' or 'desc'.
Sorting with default orderBy ${defaultOptions.orderBy}`);
    options.orderBy = defaultOptions.orderBy;
  } else {
    console.log(`Sorting with custom order by ${options.orderBy}`);
  }

  if (options.isCaseSensitive === undefined) {
    options.isCaseSensitive = defaultOptions.isCaseSensitive;
    console.log(
      `Sorting with default case sensitive ${options.isCaseSensitive}`
    );
  } else {
    console.log(
      `Sorting with custom case sensitive ${options.isCaseSensitive}`
    );
  }

  return options;
};

interface SortStringAlgorithm {
  (a: string, b: string): number;
}

const getSortAlgorithm = (
  order: string,
  isCaseSensitive: boolean
): SortStringAlgorithm => {
  switch (order) {
    case "desc":
      return isCaseSensitive
        ? (a: string, b: string) =>
            convertToAscii(b)
              .toString()
              .localeCompare(convertToAscii(a).toString())
        : (a: string, b: string) =>
            b.toLowerCase().localeCompare(a.toLowerCase());
    default:
      return isCaseSensitive
        ? (a: string, b: string) =>
            convertToAscii(a)
              .toString()
              .localeCompare(convertToAscii(b).toString())
        : (a: string, b: string) =>
            a.toLowerCase().localeCompare(b.toLowerCase());
  }

  function convertToAscii(text: string): number {
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
export const sortStrings = (
  stringArray: ReadonlyArray<string>,
  options?: SortingOptions | undefined
): string[] => {
  const _options: SortingOptions = sanitizeOptions(options);
  const _arrayCopy: string[] = stringArray.slice();

  const _order: string =
    _options.orderBy !== undefined ? _options.orderBy : "asc";

  const _isCaseSensitive: boolean =
    _options.isCaseSensitive !== undefined ? _options.isCaseSensitive : true;

  console.log(
    `Case Sensitive: ${_isCaseSensitive}, order: ${_order}`,
    _arrayCopy.sort(getSortAlgorithm(_order, _isCaseSensitive))
  );
  console.log("");

  return _arrayCopy;
};
