import JStr from "../src/main.ts";

/**
 * Tests Singular the words of string.
 */

describe("JStr singular method", () => {
  it("should handle irregular plurals", () => {
    expect(JStr.of("children").singular().toString()).toBe("child");
  });

  it("should handle regular plurals", () => {
    expect(JStr.of("dogs").singular().toString()).toBe("dog");
    expect(JStr.of("apples").singular().toString()).toBe("apple");
    // Add more test cases for regular plurals as needed
  });

  it('should handle words ending with "ies"', () => {
    expect(JStr.of("ponies").singular().toString()).toBe("pony");
  });

  it("should return the same word for singular and unknown plurals", () => {
    expect(JStr.of("cat").singular().toString()).toBe("cat");
    expect(JStr.of("apple").singular().toString()).toBe("apple");
  });
});
