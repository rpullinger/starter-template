import root from 'utils/root';

const getInitialState = () => ({
	width: root.innerWidth,
	height: root.innerHeight
});

export const actions = {
	resize: state => ({
		...state,
		width: root.innerWidth,
		height: root.innerHeight
	})
};

export default {
	getInitialState,
	actions
};
