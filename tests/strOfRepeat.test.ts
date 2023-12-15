import { str, lower } from "../src/main.ts";

test("Str.of().repeat", () => {
  expect(str.of("a").repeat(5)).toBe("aaaaa");
});

test("Str.lowerCase", () => {
  expect(str.lower("pakISTAN")).toBe("pakistan");
});

test("Str.upperCase", () => {
  expect(str.upper("pakISTAN")).toBe("PAKISTAN");
});

test("Str.upperCase", () => {
  expect(str.capitalize("this is pakistan")).toBe("This Is Pakistan");
});

// Simple
test("lowerCase", () => {
  expect(lower("Pakistan")).toBe("pakistan");
});
