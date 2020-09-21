import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/Reducer';


function Todos() {
    const [ newTodo, setNewTodo ] = useState('')
    const [ state, dispatch ] = useReducer(todoReducer, initialState)
    
    const changeHandler = event => {

        setNewTodo(event.target.value);
    }

    const submitHandler = ()=> {
        setNewTodo('')
    }
    
    return (
        <div>
              <input
                type="text"
                placeholder="Add Todo"
                value={newTodo}
                onChange={changeHandler}
                
                />
                <button onClick={()=>{
                    dispatch({ type: 'ADD_TODO', payload: newTodo })
                    submitHandler();
                }}>Add Todo</button>
                <button onClick={()=>{
                    dispatch({ type: 'CLEAR_TODOS' })
                }}>Clear Todo</button>
        

             {state.todos.map( todo => {
                 return(
                 <h3 className={(todo.completed === false)? 'todo': 'todo completed'} 
                    key={todo.id}
                    onClick={()=> {
                        todo.completed = !todo.completed;
                        dispatch({ type: 'COMPLETE_TASK'})
                    }}
                 >{todo.item}</h3>
                 )
             })}
            
        </div>
    )
}

export default Todos
