import JStr from "../src/main.ts";

describe("JStr between method", () => {
  it("should return 'brown' between 'quick' and 'fox'", () => {
    const result = JStr.of(
      "The big lion and many fox fights each other for food"
    )
      .between("big", "fights")
      .trim()
      .toString();
    expect(result).toBe("lion and many fox");
  });

  it("should return an empty string if start is not found", () => {
    const result = JStr.of(
      "The big lion and many fox fights each other for food"
    )
      .between("food", "food")
      .trim()
      .toString();
    expect(result).toBe("");
  });

  it("should return an empty string if end is not found after start", () => {
    const result = new JStr(
      "The big lion and many fox fights each other for food"
    )
      .between("fights", "swift")
      .trim()
      .toString();
    expect(result).toBe("");
  });

  it("should return an empty string if start is found after end", () => {
    const result = new JStr(
      "The big lion and many fox fights each other for food"
    )
      .between("the", "quick")
      .toString();
    expect(result).toBe("");
  });

  it("should handle an empty string correctly", () => {
    const result = new JStr("").between("start", "end").toString();
    expect(result).toBe("");
  });

  it("should handle when start and end are the same", () => {
    const result = new JStr(
      "The big lion and many fox fights each other for food"
    )
      .between("big", "fox")
      .trim()
      .toString();
    expect(result).toBe("lion and many");
  });
});
