import { Component } from 'preact';

class Helmet extends Component {
	componentDidMount() {
		document.title = this.props.title;
	}
}

export default Helmet;
