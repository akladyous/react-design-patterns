import CountUp from 'react-countup';

const CountUpComponent = ({ maxValue = 100, delay = 0, duration = 3, text, suffix, textSize = '1rem', className }) => {
  return (
    <CountUp
      start={0}
      end={maxValue}
      delay={delay}
      duration={duration}
      {...(suffix ? { suffix } : {})}
      useEasing={true}
      enableScrollSpy={true}
    >
      {({ countUpRef }) => (
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <div>
            <p className='my-0'>
              <span
                {...(className ? { className } : null)}
                ref={countUpRef}
                style={{ fontSize: textSize }}
              ></span>
            </p>
          </div>
          {text ? (
            <div>
              <p className='my-0'>{text}</p>
            </div>
          ) : null}
        </div>
      )}
    </CountUp>
  );
};

export default CountUpComponent;
