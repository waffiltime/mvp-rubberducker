class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: ''
		}
	}

	search() {
		this.props.onSearch(this.state.address);
	}

	updateAddress(event) {
    console.log('event.target.value =', event.target.value);
    this.setState({
    	address: event.target.value
    })
	}

	render() {
		return (<div>
			<span>Enter smart contract address here!! </span>
			<input type="text" name="address" onChange={this.updateAddress.bind(this)}/>
			<button onClick={this.search.bind(this)}> Add contract </button>
			</div>)
	}
}