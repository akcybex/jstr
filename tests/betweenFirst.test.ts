import JStr from "../src/main.ts";

describe("JStr dynamic betweenFirst method", () => {
    test("it should return an a string", () => {
        const result = JStr.of("[a]bc[d]").betweenFirst("[", "]").toString();
        expect(result).toBe("a");
    });

    test("it should return an a string", () => {
        const result = JStr.of("[a] bc [d]").betweenFirst("[", "]").toString();
        expect(result).toBe("a");
    });

    test("it should return an a world! please make me", () => {
        const result = JStr.of(
            "Hello world! please make me happy. Hello world! please make me happy."
        )
            .betweenFirst("Hello", "happy")
            .toString().trim();
        expect(result).toBe("world! please make me");
    });

    it("it should return all string if end marker is empty", () => {
        const result = JStr.of("[a]bcd").betweenFirst("[", "").toString().trim();
        expect(result).toBe("[a]bcd");
    });
});

describe("JStr static betweenFirst method", () => {
    test("it should return an a string", () => {
        const result = JStr.betweenFirst("[a]bc[d]", "[", "]")
        expect(result).toBe("a");
    });

    test("it should return an a string", () => {
        const result = JStr.betweenFirst("[a] bc [d]", "[", "]");
        expect(result).toBe("a");
    });

    test("it should return an a world! please make me", () => {
        const result = JStr.betweenFirst(
            "Hello world! please make me happy. Hello world! please make me happy.", "Hello", "happy"
        )
            .trim();
        expect(result).toBe("world! please make me");
    });

    it("it should return all string if end marker is empty", () => {
        const result = JStr.betweenFirst("[a]bcd", "[", "").trim();
        expect(result).toBe("[a]bcd");
    });
});
