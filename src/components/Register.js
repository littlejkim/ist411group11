import React from 'react';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }

  handleEmail(text)
  {
    this.setState({email:text.target.value});
  }

  handlePassword(text) {
    this.setState({password:text.target.value});
  }

  handleName(text) {
      this.setState({name:text.target.value});
  }

  handleCreateAccount(event) {
      event.preventDefault();
      this.props.history.push('/produce');
  }
  render() {
    return (
        <div>
            <h1>
                IST 411 Group 11
            </h1>
            <input type="text" placeholder="Enter Name" onChange={(text) => { this.handleName(text) }} />
            <br/>
            <input type="text" placeholder="Enter Email" onChange={(text) => { this.handleEmail(text) }} />
            <br/>
            <input type="password" placeholder="Enter Password" onChange={(text) => { this.handlePassword(text) }} />
            <br/>
            <form onSubmit={this.handleCreateAccount}>
              <input type='submit' value='Register for new account' />
            </form>
      </div>
    );
  }
}

export default Register;
