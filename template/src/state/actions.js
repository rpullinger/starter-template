import { actions as windowActions } from 'state/window';
import { actions as counterActions } from 'state/counter';
import { wrapWithKey } from 'utils/state';

export default {
	window: wrapWithKey('window')(windowActions),
	counter: wrapWithKey('counter')(counterActions)
};
