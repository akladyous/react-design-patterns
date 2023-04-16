import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
    this.handleMount = this.handleMount.bind(this);
  }

  handleMount() {
    this.setState({ isMiunted: !this.state.isMounted });
  }
}
