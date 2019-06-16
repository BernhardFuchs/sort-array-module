import { sortStrings } from "./index";

const stringArray: string[] = ["Zah", "bla", "Sah", "bla", "Bah", "Ah", "lah"];
test("No options", () => {
  const expArray: string[] = ["Ah", "Bah", "bla", "bla", "lah", "Sah", "Zah"];
  expect(sortStrings(stringArray)).toEqual(expArray);
});

test("IsCaseSensitive 'false'", () => {
  const expArray: string[] = ["Ah", "Bah", "bla", "bla", "lah", "Sah", "Zah"];
  expect(sortStrings(stringArray, { isCaseSensitive: false })).toEqual(
    expArray
  );
});

test("IsCaseSensitive 'true'", () => {
  const expArray: string[] = ["Ah", "Bah", "Sah", "Zah", "bla", "bla", "lah"];
  expect(sortStrings(stringArray, { isCaseSensitive: true })).toEqual(expArray);
});

test("Order 'desc'", () => {
  const expArray: string[] = ["Zah", "Sah", "lah", "bla", "bla", "Bah", "Ah"];
  expect(sortStrings(stringArray, { orderBy: "desc" })).toEqual(expArray);
});

test("Order 'desc', IsCaseSensitive 'false", () => {
  const expArray: string[] = ["Zah", "Sah", "lah", "bla", "bla", "Bah", "Ah"];
  expect(
    sortStrings(stringArray, { orderBy: "desc", isCaseSensitive: false })
  ).toEqual(expArray);
});

test("Order 'desc', IsCaseSensitive 'true", () => {
  const expArray: string[] = ["lah", "bla", "bla", "Zah", "Sah", "Bah", "Ah"];
  expect(
    sortStrings(stringArray, { orderBy: "desc", isCaseSensitive: true })
  ).toEqual(expArray);
});

test("Order 'asc', IsCaseSensitive 'false", () => {
  const expArray: string[] = ["Ah", "Bah", "bla", "bla", "lah", "Sah", "Zah"];
  expect(
    sortStrings(stringArray, { orderBy: "asc", isCaseSensitive: false })
  ).toEqual(expArray);
});

test("Order 'asc', IsCaseSensitive 'true'", () => {
  const expArray: string[] = ["Ah", "Bah", "Sah", "Zah", "bla", "bla", "lah"];
  expect(
    sortStrings(stringArray, { orderBy: "asc", isCaseSensitive: true })
  ).toEqual(expArray);
});

test("Order 'wrongInput'", () => {
  const expArray: string[] = ["Ah", "Bah", "bla", "bla", "lah", "Sah", "Zah"];
  expect(sortStrings(stringArray, { orderBy: "wrongInput" })).toEqual(expArray);
});
