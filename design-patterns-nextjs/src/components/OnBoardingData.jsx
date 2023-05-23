import React from 'react';

export default function OnBoardingData({
  children,
  onFinish,
  currentIndex,
  onNext,
}) {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children).at(currentIndex);

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}
