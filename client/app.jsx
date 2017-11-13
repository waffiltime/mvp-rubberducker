class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}

onSearch (message) {
	console.log(message);
  console.log(`Talking to Rubber Ducker`);
  fetch('/../rec', {
    method: 'POST',
    body: JSON.stringify({
      incmessage: message
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response)=>{
    console.log('response = ', response.json());
    //this.state.messages setState with response
    return response.json();
  }).then((json)=>{
    console.log('json =', json);
  })
}

renderMessage () {
  
}

render () {
  return (<div>
    <h1>Meet Rubber Ducker, your new favorite HIR</h1>
    <img src="/resources/duck.jpg" />
    <Messages messages={this.state.messages}/>
    <Search onSearch={this.onSearch.bind(this)}/>
  </div>
  )
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);