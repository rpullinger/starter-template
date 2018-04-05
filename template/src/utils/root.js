export default (typeof window !== 'undefined'
	? window
	: {
		addEventListener: () => {},
		removeEventListener: () => {},
		innerWidth: 320,
		innerHeight: 520
	});
