import React, { useState } from 'react';

const StateInReact = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>{props.message}</p>}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default StateInReact;
