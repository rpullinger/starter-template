export const wrapWithKey = key => actions =>
	Object.entries(actions).reduce(
		(obj, [name, func]) => ({
			...obj,
			[name]: (state, ...args) => ({ [key]: func(state[key], ...args) })
		}),
		{}
	);

export const combine = (...funcs) => (state, ...args) => ({
	...funcs.reduce(
		(next, func) => ({
			...next,
			...func(next, ...args)
		}),
		state
	)
});
