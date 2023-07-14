import React from 'react'


// JSX Expressions
const name = 'React'
const element = <h1>Hello, {name}</h1>

// Attributes with JSX
const attribute = <a target='blank' href='https://legacy.reactjs.org/docs/introducing-jsx.html'>Link for reactjs</a>

const applicants = [ {
  name: 'Joe', work: 'freelance-developer', 
  blogs: '54', websites: '32', 
  hackathons: 'none', location: 'Morocco', id: '0',
    
},
 {
  name: 'Janet', work: 'fullstack-developer', 
  blogs: '34', websites: '12', 
  hackathons: '6', location: 'Mozambique', id: '1',
    
},

];


const Testing = (props) => {
  return (
    <>
    <div>Testing</div>
    <button type="submit">Label{props.label}</button>
    {element}{attribute}
    <ul>
      {applicants.map((data,index)=>{
        return (
        <div key={data.id}>
          <li  >{data.name}</li>
        </div>
        )
      })}
    </ul>
    </>
  )
}

export default Testing