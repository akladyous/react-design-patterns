import React from 'react';
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  // getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
  // getDerivedStateFromProps exists for only one purpose. It enables a component to update its internal state as the result of changes in props.
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cshoud component update', 'color: green');
    console.log('current State : ', this.state, 'nextState.counter : ', nextState);
    console.log('current Props : ', this.props, 'nextProps.userId  : ', nextProps);
    return true;
  }

  componentDidMount() {
    console.log('Component did mount');
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }
  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  decrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
