import React from 'react'
import {store} from './Store'

export const countReducer = (state = 0, action)=>{
  switch(action.type){   
      case 'INCREMENT':
      return state + 1
      case 'DECREMENT':
      return state - 1
      case 'ZERO':
      return 0
      default: // if none of the above matches, code comes here
      return state
      }
}

const Redux = () => {
  countReducer()
  return (
      <div>
        <div>
          {store.getState()}
        </div>
          <button 
            onClick={() => store.dispatch({ type: 'INCREMENT' })}
            >
            plus
          </button>
          <button
            onClick={() => store.dispatch({ type: 'DECREMENT' })}
            >
            minus
          </button>
          <button 
            onClick={() => store.dispatch({ type: 'ZERO' })}
            >
            zero
          </button>
        </div>
      )
}

export default Redux
