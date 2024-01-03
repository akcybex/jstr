import JStr from "../src/main.ts";

/**
 * The remove method removes the given value or array of values from the string
 */

describe("JStr static remove method", () => {
    test("should return the string and removed all e characters", () => {
        expect(JStr.remove("e", 'Peter Piper picked a peck of pickled peppers.')).toBe("Ptr Pipr pickd a pck of pickld ppprs.");
    });

    test("should return the string and removed all quite word", () => {
        expect(JStr.remove("quite ", 'Arkansas is quite beautiful!')).toBe("Arkansas is beautiful!");
    });
});


describe("JStr dynamic remove method", () => {
    test("should return the string and removed all e characters", () => {
        expect(JStr.of('Peter Piper picked a peck of pickled peppers.').remove("e").toString()).toBe("Ptr Pipr pickd a pck of pickld ppprs.");
    });

    test("should return the string and removed all quite word", () => {
        expect(JStr.of('Arkansas is quite beautiful!').remove('quite ').toString()).toBe("Arkansas is beautiful!");
    });
});