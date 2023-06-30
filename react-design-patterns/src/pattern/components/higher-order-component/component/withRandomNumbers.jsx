export function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

export default function withRandomNumber(WrapperComponent) {
  return (props) => {
    console.log('passed props : ', props);
    return (
      <WrapperComponent randomNumGenerator={generateRandomNumber} {...props} />
    );
  };
}
