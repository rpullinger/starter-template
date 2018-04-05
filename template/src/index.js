import './style';
import { debounce } from 'tiny-throttle';
import store from 'state/store';
import actions from 'state/actions';
import root from 'utils/root';
import Home from 'routes/home';
import { Provider } from 'unistore/preact';
import { Router } from 'preact-router';
import { trackPageview } from 'utils/analytics';

if (module.hot) {
	require('preact/debug');
}

const debounceResize = debounce(store.action(actions.window.resize), 100);
root.addEventListener('resize', debounceResize);

const updatePage = () => {
	trackPageview();
};

export default () => (
	<div>
		<Provider store={store}>
			<Router onChange={updatePage}>
				<Home path="/" />
			</Router>
		</Provider>
	</div>
);
