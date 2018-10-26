import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      email:'',
      password:''
    }
  }

  handleEmail(text)
  {
    this.setState({email:text.target.value})
  }

  handlePassword(text) {
    this.setState({password:text.target.value})
  }

  login() {
    console.warn("all state")
    let obj = {}
    obj.email = this.state.email
    obj.password = this.state.password

    fetch('http://localhost',
      {
      header: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({obj})
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login with React</h1>
        </header>

        <input type="text" placeholder="Enter Email" onChange={(text) => { this.handleEmail(text) }} />
        <br/>
        <input type="password" placeholder="Enter Password" onChange={(text) => { this.handlePassword(text) }} />
        <br/>
        <button onClick={()=>{this.login()}}>Login</button> 
      </div>
    );
  }
}

export default App;
