import React from 'react';
import sqltest from '/database/sqltest';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleEmail(text)
  {
    this.setState({email:text.target.value});
  }

  handlePassword(text) {
    this.setState({password:text.target.value});
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.history.push('/produce');
  }

  handleRegister(event) {
    event.preventDefault();
    this.props.history.push('/register');
  }

  render() {
    return (
        <div>
            <h1>
                IST 411 Group 11
            </h1>
            <input type="text" placeholder="Enter Email" onChange={(text) => { this.handleEmail(text) }} />
            <br/>
            <input type="password" placeholder="Enter Password" onChange={(text) => { this.handlePassword(text) }} />
            <br/>
            <form onSubmit={this.handleLogin}>
              <input type='submit' value='Login' />
            </form>

            <form onSubmit={this.handleRegister}>
              <input type='submit' value='Register' />
            </form>
      </div>
    );
  }
}

export default Login;
