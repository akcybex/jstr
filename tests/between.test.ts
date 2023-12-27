import JStr from "../src/main.ts";

describe("JStr dynamic between method", () => {
    test("should return 'brown' between 'quick' and 'fox'", () => {
        const result = JStr.of(
            "The big lion and many fox fights each other for food"
        )
            .between("big", "fights")
            .toString().trim();
        expect(result).toBe("lion and many fox");
    });

    test("should return an empty string if start is not found", () => {
        const result = JStr.of(
            "The big lion and many fox fights each other for food"
        )
            .between("food", "food")
            .toString();
        expect(result).toBe("");
    });

    test("should return all string after frist value if end is not found after start", () => {
        const result = JStr.of(
            "The big lion and many fox fights each other for food"
        )
            .between("fights", "swift")
            .toString().trim();
        expect(result).toBe("each other for food");
    });

    test("should return string if found any value between given", () => {
        const result = JStr.of(
            "The big lion and many fox fights each other for food"
        )
            .between("the", "quick")
            .toString().trim();
        expect(result).toBe("r for food");
    });

    test("should handle an empty string correctly", () => {
        const result = JStr.of("").between("start", "end").toString();
        expect(result).toBe("");
    });

    test("should handle when start and end are the same", () => {
        const result = JStr.of(
            "The big lion and many fox fights each other for food"
        )
            .between("big", "fox")
            .toString().trim();
        expect(result).toBe("lion and many");
    });
});


describe("JStr static between method", () => {
    test("should return 'brown' between 'quick' and 'fox'", () => {
        const result = JStr.between(
            "The big lion and many fox fights each other for food", "big", "fights"
        ).trim();
        expect(result).toBe("lion and many fox");
    });

    test("should return an empty string if start is not found", () => {
        const result = JStr.between(
            "The big lion and many fox fights each other for food", "food", "food"
        )
        expect(result).toBe("");
    });

    test("should return all string after frist value if end is not found after start", () => {
        const result = JStr.between(
            "The big lion and many fox fights each other for food", "fights", "swift"
        ).trim();
        expect(result).toBe("each other for food");
    });

    test("should return string if found any value between given", () => {
        const result = JStr.between(
            "The big lion and many fox fights each other for food", "the", "quick"
        )
            .trim();
        expect(result).toBe("r for food");
    });

    test("should handle an empty string correctly", () => {
        const result = JStr.between("", "start", "end").toString();
        expect(result).toBe("");
    });

    test("should handle when start and end are the same", () => {
        const result = JStr.between(
            "The big lion and many fox fights each other for food", "big", "fox"
        )
            .trim();
        expect(result).toBe("lion and many");
    });
});