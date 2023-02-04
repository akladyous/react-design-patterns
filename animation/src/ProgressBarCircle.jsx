import { InView } from 'react-intersection-observer';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import CountUpComponent from './CountUpComponent.jsx';

export default function ProgressBarCircle({
  maxValue = 100,
  delay = 0,
  duration = 3,
  text,
  suffix,
  textSize = '1rem',
  trailColor = '#d6d6d6',
  textColor = '#3e98c7',
  pathColor = '#3e98c7',
  children,
}) {
  return (
    <>
      <InView>
        {({ inView, ref, entry }) => {
          const percentage = inView ? maxValue : 0;
          const transition = `stroke-dashoffset ${duration}s ease ${delay}s`;
          return (
            <div ref={ref}>
              <CircularProgressbarWithChildren
                value={percentage}
                {...(text ? (suffix ? { text: `${text}${suffix}` } : { text }) : {})}
                styles={buildStyles({
                  // pathTransition: percentage === 0 ? 'none' : transition,
                  trailColor,
                  textColor,
                  pathColor,
                  textSize,
                  pathTransitionDuration: duration,
                })}
              >
                {children}
              </CircularProgressbarWithChildren>
            </div>
          );
        }}
      </InView>
    </>
  );
}
