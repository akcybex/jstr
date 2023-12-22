import JStr from "../src/main.ts";

describe("JStr beforeLast method", () => {
  it("should return 'App\\Http\\Controllers' before the last '\\'", () => {
    const result = new JStr("App\\Http\\Controllers\\Controller")
      .beforeLast("\\")
      .trim()
      .toString();
    expect(result).toBe("App\\Http\\Controllers");
  });

  it("should return the entire string if the delimiter is not found", () => {
    const result = new JStr("HelloWorld").beforeLast("\\").toString();
    expect(result).toBe("HelloWorld");
  });

  it("should handle an empty string correctly", () => {
    const result = JStr.of("").beforeLast("\\").toString();
    expect(result).toBe("");
  });

  it("should handle a multi-character delimiter", () => {
    const result = new JStr("abc123abc456abc789").beforeLast("abc").toString();
    expect(result).toBe("abc123abc456");
  });
});
