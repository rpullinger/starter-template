import root from 'utils/root';
let firstLoad = true;

export const trackPageview = () => {
	if (typeof root.ga === 'function' && !firstLoad) {
		root.ga('set', 'page', location.pathname + location.search);
		root.ga('send', 'pageview');
	}
	else {
		firstLoad = false;
	}
};

export const trackEvent = (eventCategory, eventAction, eventLabel) => {
	if (typeof root.ga === 'function') {
		root.ga('send', {
			hitType: 'event',
			eventCategory,
			eventAction,
			eventLabel
		});
	}
};
