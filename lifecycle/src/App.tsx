import React from 'react';
interface iProps {
  userName: string;
}
interface iState {
  isMouned: boolean;
}
class App extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      isMouned: false,
    };
    this.handleMount = this.handleMount.bind(this);
  }
  async componentDidMount() {
    console.group('Main App');
    console.log('componentDidMount');
  }

  handleMount() {
    this.setState((previousState, props) => ({
      isMouned: !previousState.isMouned,
    }));
  }
  render() {
    var buttonContent = this.state.isMouned ? 'Mount' : 'unMount';
    return (
      <main className='mainContainer'>
        <div>
          <h1>Main Application</h1>
          <button onClick={this.handleMount}>{buttonContent}</button>
        </div>
      </main>
    );
  }
}
export default App;
