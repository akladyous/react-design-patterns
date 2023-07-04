import { generateRandomNumber } from '../../../../lib/generateRandomNumber';

export default function withRandomNumbersGenerator(WrapperComponent) {
  return (props) => {
    return (
      <WrapperComponent randomNumGenerator={generateRandomNumber} {...props} />
    );
  };
}
