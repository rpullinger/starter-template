const getInitialState = () => ({
	value: 0
});

export const actions = {
	add: state => ({ value: state.value + 1 }),
	minus: state => ({ value: state.value - 1 }),
	reset: state => getInitialState(),
	set: (state, value) => ({ value })
};

export default {
	getInitialState,
	actions
};
