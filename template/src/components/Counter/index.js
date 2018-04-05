import { connect } from 'unistore/preact';
import actions from 'state/actions';
import s from './style.css';

const Counter = ({ value, add, minus, reset, set }) => (
	<div className={s.root}>
		<p>Counter</p>
		<p>{value}</p>
		<p>
			<button onClick={add}>Add</button>
			<button onClick={minus}>Minus</button>
			<button onClick={reset}>Reset</button>
			<button onClick={set.bind(this, 20)}>Set to 20</button>
		</p>
	</div>
);

export default connect(state => ({ ...state.counter }), {
	...actions.counter
})(Counter);
