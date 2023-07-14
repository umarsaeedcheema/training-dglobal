import React, { useEffect } from 'react';

const FunctionalComponent = () => {
  useEffect(() => {
    console.log('Component Did Mount');

    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component Did Update');
  });

  console.log('Render');

  return <div>Functional Component</div>;
};

export default FunctionalComponent;
