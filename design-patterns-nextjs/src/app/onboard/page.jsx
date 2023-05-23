import StepOne from './onboard/StepOne';
import StepTwo from './onboard/StepTwo';
import StepThree from './onboard/StepThree';
import OnBoardingData from '@/components/OnBoardingData';

export default function OnBoardHome({ children }) {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBoardingData({ ...onBoardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <OnBoardingData
        currentIndex={currentIndex}
        onNext={onNext}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </OnBoardingData>
    </>
  );
}
