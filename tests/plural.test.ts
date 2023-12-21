import { jstr } from "../src/main.ts";

/**
 * Tests Plural the words of string.
 */

describe("JStr plural method", () => {
  test('should pluralize words ending with "y" correctly', () => {
    const result = jstr("study").plural().toString();
    expect(result).toBe("studies");
  });

  test('should add "s" for basic pluralization', () => {
    const result = jstr("apple").plural().toString();
    expect(result).toBe("apples");
  });
});
