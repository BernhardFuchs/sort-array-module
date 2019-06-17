# Sort string arrays

## Installation

`npm install sort-array-devfox`

## Usage

`sortStrings(stringArray: string[], options?: SortingOptions)`

Possible Options:

- `orderBy` which can take `"asc"` or `"desc"`
- `isCaseSensitive` which can be `true` or `false`

Default options are `{ orderBy: "asc", isCaseSensitive: false }`

**Case Sensitivity:**
Given an Array `["Za", "ma", "Ba", "aa"]`

- with case sensitive `true` => `["Ba", "Za", "aa", "ma"]`
- with case sensitive `false` => `["aa", "Ba", "ma", "Za"]`

For more usage details see the [Unit Tests](https://github.com/BernhardFuchs/sort-array-module/blob/master/src/index.spec.ts)
