import React from 'react';
import { render } from 'react-dom';
import VisibilitySensor from 'react-visibility-sensor';
import { InView } from 'react-intersection-observer';

// Import module and default styles
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBarCircle() {
  return (
    <div>
      <div style={{ height: 1500, background: '#ddd' }}>Placeholder content, scroll down</div>
      <div style={{ width: '100px' }}>
        <p>This should animate only when visible</p>
        <VisibilitySensor>
          {/* -------------------------------------- */}
          <InView
            as='div'
            onChange={(inView, entry) => console.log('Inview:', inView)}
          >
            <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
            />
          </InView>
          {/* -------------------------------------- */}
          {({ isVisible }) => {
            const percentage = isVisible ? 90 : 0;
            return (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
              />
            );
          }}
        </VisibilitySensor>
      </div>
    </div>
  );
}
