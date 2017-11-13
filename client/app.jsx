

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}

onSearch (address) {
	console.log(address);
  console.log(`Talking to Rubber Ducker`);
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
      <h1>Rubber Ducker</h1>
      <Messages messages={this.state.messages}/>
      <Search onSearch={this.onSearch.bind(this)}/>
    </div>)
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);