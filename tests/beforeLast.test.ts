import JStr from "../src/main.ts";

describe("JStr static beforeLast method", () => {
    test("should return 'App\\Http\\Controllers' before the last '\\'", () => {
        const result = JStr.beforeLast("App\\Http\\Controllers\\Controller", "\\")
            .trim();
        expect(result).toBe("App\\Http\\Controllers");
    });

    test("should return the entire string if the delimiter is not found", () => {
        const result = JStr.beforeLast("HelloWorld", "\\");
        expect(result).toBe("HelloWorld");
    });

    test("should handle an empty string correctly", () => {
        const result = JStr.beforeLast("", "\\");
        expect(result).toBe("");
    });

    test("should handle a multi-character delimiter", () => {
        const result = JStr.beforeLast("abc123abc456abc789", "abc");
        expect(result).toBe("abc123abc456");
    });
});

describe("JStr dynamic beforeLast method", () => {
    test("should return 'App\\Http\\Controllers' before the last '\\'", () => {
        const result = JStr.of("App\\Http\\Controllers\\Controller").beforeLast('\\')
            .toString();
        expect(result).toBe("App\\Http\\Controllers");
    });

    test("should return the entire string if the delimiter is not found", () => {
        const result = JStr.of("HelloWorld").beforeLast("\\").toString();
        expect(result).toBe("HelloWorld");
    });

    test("should handle an empty string correctly", () => {
        const result = JStr.of("").beforeLast("\\").toString();
        expect(result).toBe("");
    });

    test("should handle a multi-character delimiter", () => {
        const result = JStr.of("abc123abc456abc789").beforeLast("abc").toString();
        expect(result).toBe("abc123abc456");
    });
});
