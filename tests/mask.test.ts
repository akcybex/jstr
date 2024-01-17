// import JStr from '../src/main.ts';

// /**
//  * The after method returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:
//  */

// describe('JStr static mask function', () => {
//     test('should return the original value if character is an empty string', () => {
//         const result = JStr.mask('example', '', 2, 3);
//         expect(result).toBe('example');
//     });

//     test('should return the original value if the segment is empty', () => {
//         const result = JStr.mask('example', 'X', 10, 3);
//         expect(result).toBe('example');
//     });

//     test('should mask the specified segment with the given character', () => {
//         const result = JStr.mask('1234567890', 'X', 3, 6);
//         expect(result).toBe('12XXXX7890');
//     });

//     test('should handle negative index correctly', () => {
//         const result = JStr.mask('abcdefgh', 'X', -3, 2);
//         expect(result).toBe('abXXefgh');
//     });

//     // test('should handle negative index that is out of bounds correctly', () => {
//     //     const result = JStr.mask('abcdefgh', 'X', -10, 3);
//     //     expect(result).toBe('XXXdefgh');
//     // });

//     // Additional tests to consider:

//     // test('should handle null length argument', () => {
//     //     const result = JStr.mask('example', 'X', 2, null);
//     //     expect(result).toBe('exXmple');
//     // });

//     // test('should throw an error if index is out of bounds and length is null', () => {
//     //     expect(() => JStr.mask('example', 'X', 10, null)).toThrow();
//     // });

//     // test('should mask the entire string if index is 0 and length is null', () => {
//     //     const result = JStr.mask('example', 'X', 0, null);
//     //     expect(result).toBe('XXXXXXXX');
//     // });
// });
