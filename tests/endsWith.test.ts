import JStr from "../src/main.ts";

/**
 * The endsWith method determines if the given string ends with the given value
 */

describe("JStr static endsWith method", () => {
    // find the Hello from string
    test("JStr.endsWith() - return false if give value does not match with end string", () => {
        expect(JStr.endsWith("Hello world", "Hello")).toBe(false);
    });

    // find the Hello from string
    test("JStr.endsWith() - return true if give value match with end string", () => {
        expect(JStr.endsWith("We are saying hello to you", "you")).toBe(true);
    });

    test("JStr.endsWith() - return false if give value does not match with end string", () => {
        expect(
            JStr.endsWith(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", "with desktop"
            )
        ).toBe(true);
    });
});

describe("JStr dynamic endsWith method", () => {
    // find the Hello from string
    test("JStr.endsWith() - return false if give value does not match with end string", () => {
        expect(JStr.of("Hello world").endsWith("Hello")).toBe(false);
    });

    // find the Hello from string
    test("JStr.endsWith() - return true if give value match with end string", () => {
        expect(JStr.of("We are saying hello to you").endsWith("you")).toBe(true);
    });

    test("JStr.endsWith() - return false if give value does not match with end string", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).endsWith("with desktop")
        ).toBe(true);
    });
});