

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addresses: []
		}
	}

onSearch (address) {
	console.log(address);
  console.log(`Searching address ${address}`);
  fetch('/../rec', {
    method: 'POST',
    body: JSON.stringify({
      address: address
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function(response) {
    return response.json();
  })
}

render () {
    return (<div>
      <h1>Ethereum Smart Contract Puller</h1>
      <Contracts contracts={this.state.addresses}/>
      <Search onSearch={this.onSearch.bind(this)}/>
    </div>)
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);