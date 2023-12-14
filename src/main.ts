export default  {
	of: (str: string) => {
		return {
			repeat: (times: number) => str.repeat(Number(times)),
			// Add other string manipulation methods as needed
		};
	},
}

