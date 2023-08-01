// import './App.css';


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// import React from 'react';

// class LifecycleComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('Constructor');
//     this.state = {
//       counter : 0
//     }
//   }

//   componentDidMount() {
//     console.log('Component Did Mount');
//   }

//   componentDidUpdate() {
//     console.log('Component Did Update');
//   }

//   componentWillUnmount() {
//     console.log('Component Will Unmount');
//   }

//   handleClick = () => {
//     this.setState((prevState) => {
//       console.log('Previous state:', prevState);
//       return {
//         counter: prevState.counter + 1
//       };
//     });
//   };

//   render() {
//     console.log('Render');
//     return (

//     <>
//     <div>Component Lifecycle Example </div>
//     <button onClick = {this.handleClick}>Counter {this.state.counter}</button>
    
//     </>
//       )
    
//   }
// }

// export default LifecycleComponent;


// // export default App;


import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

