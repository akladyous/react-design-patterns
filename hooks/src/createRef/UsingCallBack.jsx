class SimpleCallBackRef extends React.Component {
  onClick() {
    this.inputRef.focus();
  }

  render() {
    return (
      <div>
        <input
          type='text'
          name='firstName'
          ref={(ref) => (this.inputRef = ref)}
        />
        <button onClick={this.onClick.bind(this)}>Click to Focus</button>
      </div>
    );
  }
}
