import React from 'react';

const ChildComponentB = (props) => {
  return <p>Data received from ChildComponentA: {props.data}</p>;
};

const ChildComponentA = (props) => {
  return <ChildComponentB data={props.data} />;
};

const PropsDataTransfer = () => {
  const dataToTransfer = 'Hello, ChildComponentB!';
  
  return <ChildComponentA data={dataToTransfer} />;
};

export default PropsDataTransfer;
