const str = {
	of: (str) => {
		return {
			repeat: (times) => str.repeat(times),
			// Add other string manipulation methods as needed
		};
	},
}
 module.exports = str;
