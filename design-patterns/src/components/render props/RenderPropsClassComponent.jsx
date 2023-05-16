import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;

    return (
      <img
        src='xxxx'
        className={`absolute left-[${[mouse.x]}] top-[${mouse.y}]`}
      />
    );
  }
}
