import JStr from "../src/main.ts";

/**
 * The contains method determines if the given string contains the given value. This method is case sensitive:
 */

describe("JStr contains method", () => {
    // find the Hello from string
    test("JStr.contains() - return true if give value found", () => {
        expect(JStr.contains("Hello world", "Hello")).toBe(true);
    });

    // find the Hello from string
    test("JStr.contains() - return true if give value found", () => {
        expect(JStr.contains("We are saying hello to you", "hello")).toBe(true);
    });

    test("JStr.contains() - return false if give value not found", () => {
        expect(
            JStr.contains(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", "simply dummy of"
            )
        ).toBe(false);
    });

    test("JStr.contains() - return true if give value found", () => {
        expect(
            JStr.contains(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", "typesetting industry"
            )
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.contains() - return true if give value found", () => {
        expect(
            JStr.contains(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", ["typesetting industry", "of"]
            )
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.contains() - return false if give value not found", () => {
        expect(
            JStr.contains(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", ["jhon", "jack"]
            )
        ).toBe(false);
    });
});


describe("JStr dynamic contains method", () => {
    // find the Hello from string
    test("JStr.of().contains() - return true if give value found", () => {
        expect(JStr.of("Hello world").contains("Hello")).toBe(true);
    });

    // find the Hello from string
    test("JStr.of().contains() - return true if give value found", () => {
        expect(JStr.of("We are saying hello to you").contains("hello")).toBe(true);
    });

    test("JStr.of().contains - return false if give value not found", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).contains("simply dummy of")
        ).toBe(false);
    });

    test("JStr.of().contains() - return true if give value found", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).contains("typesetting industry")
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.of().contains() - return true if give value found", () => {
        expect(
            JStr.of(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).contains(["typesetting industry", "of"])
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.of().contains() - return false if give value not found", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).contains(["jhon", "jack"])
        ).toBe(false);
    });
});
