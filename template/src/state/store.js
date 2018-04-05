import createStore from 'unistore';
import window from 'state/window';
import counter from 'state/counter';

const store = createStore({
	window: window.getInitialState(),
	counter: counter.getInitialState()
});

export default store;
