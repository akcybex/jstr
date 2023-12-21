import { jstr } from "../src/main.ts";

/**
 * Tests Singular the words of string.
 */

describe("JStr singular method", () => {
  it("should handle irregular plurals", () => {
    expect(jstr("children").singular().toString()).toBe("child");
  });

  it("should handle regular plurals", () => {
    expect(jstr("dogs").singular().toString()).toBe("dog");
    expect(jstr("apples").singular().toString()).toBe("apple");
    // Add more test cases for regular plurals as needed
  });

  it('should handle words ending with "ies"', () => {
    expect(jstr("ponies").singular().toString()).toBe("pony");
  });

  it("should return the same word for singular and unknown plurals", () => {
    expect(jstr("cat").singular().toString()).toBe("cat");
    expect(jstr("apple").singular().toString()).toBe("apple");
  });
});
