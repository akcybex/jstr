import JStr from '../src/main.ts';

/**
 * The after method returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:
 */

describe('JStr static after method', () => {
	// HeLLo world with trim method
	test('JStr.after() - return world after the given Hello', () => {
		expect(JStr.after('Hello world', 'Hello ')).toBe('world');
	});

	// HeLLo world
	test('JStr.after() - return world after the given Hello', () => {
		expect(JStr.after('Hello world', 'Hello')).toBe(' world');
	});

	// if not word found after
	test('JStr.after() - return Hello world after the given Hello0', () => {
		expect(JStr.after('Hello world', 'Hello0')).toBe('Hello world');
	});

	test('JStr.after() - return  my name after the given This is', () => {
		expect(JStr.after('This is my name', 'This is')).toBe(
			' my name',
		);
	});

	test('JStr.after() - return jack after the given /', () => {
		expect(JStr.after('This is my name / jack', '/')).toBe(
			' jack',
		);
	});
});

describe('JStr dynamic after method', () => {
	// HeLLo world with trim method
	test('JStr.of().after() - return world after the given Hello', () => {
		expect(JStr.of('Hello world').after('Hello ').trim()).toBe('world');
	});

	// HeLLo world
	test('JStr.of().after() - return world after the given Hello', () => {
		expect(JStr.of('Hello world').after('Hello')).toBe(' world');
	});

	// if not word found after
	test('JStr.of().after() - return Hello world after the given Hello0', () => {
		expect(JStr.of('Hello world').after('Hello0')).toBe('Hello world');
	});

	test('JStr.of().after() - return  my name after the given This is', () => {
		expect(JStr.of('This is my name').after('This is')).toBe(
			' my name',
		);
	});

	test('JStr.of().after() - return jack after the given /', () => {
		expect(JStr.of('This is my name / jack').after('/')).toBe(
			' jack',
		);
	});
});
