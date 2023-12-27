import JStr from "../src/main.ts";

/**
 * Tests converting a string to first letter capital of each word.
 */

describe("JStr static headline method", () => {
    // HeLLo
    test("JStr.headline() -  HeLLo converts a string to first letter capital", () => {
        expect(JStr.headline("HeLLo")).toBe("Hello");
    });

    // heLLo
    test("JStr.headline() - heLLo_world converts a string to first letter capital", () => {
        expect(JStr.headline("heLLo_world")).toBe("Hello World");
    });

    // Space into headline
    test("JStr.headline() - empty converts a string to first letter capital", () => {
        expect(JStr.headline("")).toBe("");
    });

    // HELLO-WORLD!
    test("JStr.headline() - HELLO-WORLD! converts a string to first letter capital", () => {
        expect(JStr.headline("HELLO-WORLD!")).toBe("Hello World!");
    });

    // Email Notification Sent
    test("JStr.headline() - converts a string to first letter capital", () => {
        expect(JStr.headline("EmailNotificationSent")).toBe("Email Notification Sent");
    });
});

// describe("JStr dynamic headline method", () => {
//     // HeLLo
//     test("JStr.of().headline() - converts a string to first letter capital", () => {
//         expect(JStr.of("HeLLo").headline().toString()).toBe("HeLLo");
//     });

//     // heLLo
//     test("JStr.of().headline() - converts a string to first letter capital", () => {
//         expect(JStr.of("heLLo").headline().toString()).toBe("HeLLo");
//     });

//     // Space into headline
//     test("JStr.of().headline() - converts a string to first letter capital", () => {
//         expect(JStr.of("").headline().toString()).toBe("");
//     });
//     // HELLO WORLD!
//     test("JStr.of().headline() - converts a string to first letter capital", () => {
//         expect(JStr.of("HELLO WORLD!").headline().toString()).toBe("HELLO WORLD!");
//     });

//     // Email Notification Sent
//     test("JStr.of().headline() - converts a string to first letter capital", () => {
//         expect(JStr.of("EmailNotificationSent").headline().toString()).toBe("Email Notification Sent");
//     });
// });
