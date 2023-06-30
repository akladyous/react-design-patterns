import { generateRandomNumber } from '../../../../lib/generateRandomNumber';

export default function withRandomNumber(WrapperComponent) {
  return (props) => {
    return (
      <WrapperComponent randomNumGenerator={generateRandomNumber} {...props} />
    );
  };
}
