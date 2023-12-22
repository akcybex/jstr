import JStr from "../src/main.ts";

describe("JStr afterLast method", () => {
  it("should return the substring after the last occurrence of the delimiter", () => {
    expect(JStr.of("App\\Http\\Controllers\\Controller").afterLast("\\")).toBe(
      "Controller"
    );
  });

  it("should return the entire string if the delimiter is not found", () => {
    const jstr = new JStr("HelloWorld");
    const result = jstr.afterLast("\\");
    expect(result).toBe("HelloWorld");
  });

  it("should handle an empty string correctly", () => {
    const jstr = new JStr("");
    const result = jstr.afterLast("\\");
    expect(result).toBe("");
  });

  it("should handle a delimiter at the beginning of the string", () => {
    const jstr = new JStr("\\App\\Http\\Controllers\\Controller");
    const result = jstr.afterLast("\\");
    expect(result).toBe("Controller");
  });

  it("should handle a multi-character delimiter", () => {
    const jstr = new JStr("abc123abc456abc789");
    const result = jstr.afterLast("abc");
    expect(result).toBe("789");
  });
});
