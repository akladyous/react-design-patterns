import Typing from 'react-typing-animation';

export default function TypeAnimation() {
  return (
    <div className='container w-50 border'>
      <Typing>
        <div>
          There will be a 1000ms delay here,
          <Typing.Delay ms={1000} />
          then this will be typed.
        </div>
      </Typing>
    </div>
  );
}
