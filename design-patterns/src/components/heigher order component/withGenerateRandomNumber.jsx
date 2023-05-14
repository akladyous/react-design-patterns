function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

export const withGenerateRandomNumber = (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent
        randomNumGenerator={generateRandomNumber}
        {...props}
      />
    );
  };
};
