import JStr from "../src/main.ts";

// describe("JStr plural method", () => {
//   test('should pluralize words ending with "y" correctly', () => {
//     const result = JStr.of("study").plural().toString();
//     expect(result).toBe("studies");
//   });
//
//   test('should add "s" for basic pluralization', () => {
//     const result = JStr.of("apple").plural().toString();
//     expect(result).toBe("apples");
//   });
//
//   // Add more test cases as needed
// });

// describe("JStr singular method", () => {
//   test('should singular words ending with "ies" correctly', () => {
//     const result = JStr.of("studies").singular().toString();
//     expect(result).toBe("study");
//   });
//
//   test('should remove "s" for basic singularization', () => {
//     const result = JStr.of("apples").singular().toString();
//     expect(result).toBe("apple");
//   });
//
//   // Add more test cases as needed
// });

/**
 * Tests for the JStr class.
 */
describe("JStr class tests", () => {
  /**
   * Tests repeating a character multiple times.
   */
  test("JStr.of().repeat() - repeats a character", () => {
    expect(JStr.of("a").repeat(3).toString()).toBe("aaa");
  });

  /**
   * Tests repeating a character multiple times and converting to uppercase.
   */
  test("JStr.of().repeat().upper() - repeats a character and converts to uppercase", () => {
    expect(JStr.of("a").repeat(3).upper().toString()).toBe("AAA");
  });

  /**
   * Tests repeating a character multiple times and converting to lowercase.
   */
  test("JStr.of().repeat().lower() - repeats a character and converts to lowercase", () => {
    expect(JStr.of("A").repeat(3).lower().toString()).toBe("aaa");
  });

  /**
   * Tests repeating a character multiple times and capitalizing the first letter.
   */
  test("JStr.of().repeat().capitalize() - repeats a character and capitalizes the first letter", () => {
    expect(JStr.of("a").repeat(3).capitalize().toString()).toBe("Aaa");
  });

  /**
   * Tests capitalizing the first letter of each word in a string.
   */
  test("JStr.of().capitalize() - capitalizes the first letter of each word", () => {
    expect(JStr.of("hello world").capitalize().toString()).toBe("Hello World");
  });

  /**
   * Tests handling of empty strings.
   */
  test("JStr.of() with empty string", () => {
    expect(JStr.of("").repeat(3).upper().toString()).toBe("");
  });

  /**
   * Tests direct toString() call without any string manipulation.
   */
  test("JStr.of().toString() - direct toString() call without manipulation", () => {
    expect(JStr.of("hello").toString()).toBe("hello");
  });

  /**
   * Tests chaining multiple string manipulation operations.
   */
  test("JStr.of() chaining multiple operations", () => {
    expect(JStr.of("Hello World").repeat(2).lower().capitalize().toString()).toBe(
      "Hello Worldhello World"
    );
  });
});
