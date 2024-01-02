import JStr from "../src/main.ts";

/**
 * The containsAll method determines if the given string contains all of the values in a given array
 */

describe("JStr static containsAll method", () => {
    // find the Hello from string
    test("JStr.containsAll() - return true if give value found", () => {
        expect(JStr.containsAll("Hello world", ["Hello", "world"])).toBe(true);
    });

    // find the Hello from string
    test("JStr.containsAll() - return true if give value found", () => {
        expect(JStr.containsAll("We are saying hello to you", ["hello", "why"])).toBe(false);
    });

    test("JStr.containsAll() - return false if give value not found", () => {
        expect(
            JStr.containsAll(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", ["simply dummy of"]
            )
        ).toBe(false);
    });

    test("JStr.containsAll() - return true if give value found", () => {
        expect(
            JStr.containsAll(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", ["typesetting industry"]
            )
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.containsAll() - return true if give value found", () => {
        expect(
            JStr.containsAll(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", ["typesetting industry", "of"]
            )
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.containsAll() - return false if give value not found", () => {
        expect(
            JStr.containsAll(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", ["jhon", "jack"]
            )
        ).toBe(false);
    });
});


describe("JStr dynamic containsAll method", () => {
    // find the Hello from string
    test("JStr.of().containsAll() - return true if give value found", () => {
        expect(JStr.of("Hello world").containsAll(["Hello"])).toBe(true);
    });

    // find the Hello from string
    test("JStr.of().containsAll() - return true if give value found", () => {
        expect(JStr.of("We are saying hello to you").containsAll(["hello", "why"])).toBe(false);
    });

    test("JStr.of().containsAll - return false if give value not found", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).containsAll(["simply dummy of"])
        ).toBe(false);
    });

    test("JStr.of().containsAll() - return true if give value found", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).containsAll(["typesetting industry"])
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.of().containsAll() - return true if give value found", () => {
        expect(
            JStr.of(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).containsAll(["typesetting industry", "of"])
        ).toBe(true);
    });

    // any value from array find in the string
    test("JStr.of().containsAll() - return false if give value not found", () => {
        expect(
            JStr.of(
                "˝Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            ).containsAll(["jhon", "jack"])
        ).toBe(false);
    });
});
