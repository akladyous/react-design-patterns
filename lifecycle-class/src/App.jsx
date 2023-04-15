import React from 'react';
import Counter from './Counter.js';
// import logo from './logo.svg';
// import './App.css';

const fakeUser = {
  userId: 10,
  name: 'John Brain',
  email: 'john.brain@gmail.com',
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false,
      userId: 0,
    };
    this.changeUserId = this.changeUserId.bind(this);
    this.handleMount = this.handleMount.bind(this);
  }
  changeUserId() {
    console.log('change userId');
    this.setState({ userId: Math.floor(Math.random() * 100) });
  }
  handleMount() {
    this.setState({ mount: !this.state.mount });
  }
  componentDidMount() {
    console.log('App -> componentDidMount');
  }
  render() {
    return (
      <div className='App'>
        <button onClick={this.handleMount}>{!this.state.mount ? 'mount' : 'unMount'}</button>
        <button onClick={this.changeUserId}>change userId</button>
        <div>{this.state.mount ? <Counter userId={this.state.userId} /> : null}</div>
      </div>
    );
  }
}

export default App;
