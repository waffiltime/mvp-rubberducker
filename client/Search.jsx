class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		}
	}

	search() {
		this.props.onSearch(this.state.message);
	}

	updateMessage(event) {
    console.log('event.target.value =', event.target.value);
    this.setState({
    	message: event.target.value
    })
	}

	render() {
		return (<div>
				<span>Enter message: </span>
			<input type="text" name="message" onChange={this.updateMessage.bind(this)}/>
			<button onClick={this.search.bind(this)}> Submit! </button>
		</div>)
	}
}