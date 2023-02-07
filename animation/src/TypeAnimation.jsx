// import Typing from 'react-typing-animation';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

export default function TypeAnimation() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero eveniet assumenda magni officiis consequuntur dolorum ullam sapiente aut, repellendus dolore labore quos ad amet adipisci hic, eaque rerum consectetur!';
  return (
    <div className='container w-50 border'>
      <div>
        <Typed
          // strings={lorem.split(' ')}
          // strings={['marketplaces', 'businesses', 'restaurants', 'more...']}
          strings={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero eveniet assumenda magni officiis consequuntur dolorum ullam sapiente aut',
          ]}
          typeSpeed={100}
          backSpeed={50}
          loopCount={1}
          className='text-danger fs-4'
          loop
        />
      </div>
    </div>
  );
}
