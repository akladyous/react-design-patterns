import CountUp from 'react-countup';

const CountUpComponent = ({ start = 1, end, duration = 10, suffix, text, className }) => {
  return (
    <div
      style={{ height: '864px' }}
      className='mx-2 border border-2 container position-relative'
    >
      <div className='w-75 mx-auto h-75 border my-2'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officiis totam cupiditate numquam impedit illum
          hic temporibus, praesentium omnis adipisci porro, officia quaerat recusandae dolorum, commodi voluptatem modi
          corporis molestias?
        </p>
      </div>
      <div className='position-absolute bottom-0 start-50 translate-middle-x border mb-2 w-75 mx-auto'>
        <p>Counter Up</p>
        <CountUp
          start={start}
          end={end}
          duration={duration}
          suffix={` ${suffix}`}
          useEasing={true}
          enableScrollSpy={true}
          delay={500}
        >
          {({ countUpRef }) => (
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <div>
                <p className='my-0'>
                  <span
                    {...(className ? { className } : null)}
                    ref={countUpRef}
                    style={{ fontSize: '2rem' }}
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
      </div>
    </div>
  );
};

export default CountUpComponent;
