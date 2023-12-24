import JStr from "../src/main.ts";

describe("JStr betweenFirst method", () => {
  it("it should return an a string", () => {
    const result = JStr.of("[a]bc[d]").betweenFirst("[", "]").toString();
    expect(result).toBe("a");
  });

  it("it should return an a string", () => {
    const result = JStr.of("[a] bc [d]").betweenFirst("[", "]").toString();
    expect(result).toBe("a");
  });

  it("it should return an a world! please make me", () => {
    const result = JStr.of(
      "Hello world! please make me happy. Hello world! please make me happy."
    )
      .betweenFirst("Hello", "happy")
      .trim()
      .toString();
    expect(result).toBe("world! please make me");
  });

  it("it should handle an empty end marker", () => {
    const result = JStr.of("[a]bcd").betweenFirst("[", "").trim().toString();
    expect(result).toBe("");
  });
});
