import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Testing from '../Testing'
import StateInReact from '../StateInReact'
import ErrorPage from './ErrorPage'
import Counter from './Counter'
import Redux from './Redux'

const Routing = () => {
  const message = 'visible';
  return (
  <Router>
    {/* <div >
      <Link to = '/'>Home</Link>
      <Link to = '/Testing'>Test File</Link>
      <Link to = '/State-In-React'>State in React</Link>
      <Link to = '/Counter'>Counter</Link>
      <Link to = '/Redux'>Redux</Link>
    </div> */}

    <Routes>
      <Route path='/'></Route>
      <Route path='/testing' element={<Testing></Testing>} ></Route>
      <Route path='/state-in-react' element={ message ?  <StateInReact message /> : <Navigate replace to = '/'/>}></Route>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/redux' element= {<Redux></Redux>}/>
      
      <Route path = '*' element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </Router>
  )
}


export default Routing