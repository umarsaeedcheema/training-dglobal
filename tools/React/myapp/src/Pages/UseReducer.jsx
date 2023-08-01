import React from 'react'
import { useReducer } from 'react'

const UseReducer = () => {
    const userData = [
        {
        id: 1,
        name: 'umar',
        age: 22, 
        admin : true
    },
    {
        id: 2,
        name: 'saeed',
        age: 32, 
        admin : false
    }
]
//users -> current state value 
const reducerMethod = (users, action )=>{
    switch (action.type) {
        case 'addUser':{
            return [...users, action.newUser]
        }
        case 'updateUser':{
            return users.map(user => {
                if (user.id === action.updateUser.id)
                return action.updateUser
            return user
            })   
        }
        default: {

        }
    }
}
// reducerMethod, initialArg
    const [state, dispatch] = useReducer(reducerMethod, userData)

    const handleAddUser = (user) =>{
        dispatch({
            type: 'addUser', 
            newUser : user
        })
    }

    const handleUpdateUser = (updateUser) =>{
        dispatch({
            type: 'updateUser', 
            updateUser : updateUser
        })
    }
  return (
    <div>UseReducer</div>
  )
}

export default UseReducer