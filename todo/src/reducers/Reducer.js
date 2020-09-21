export const initialState = {
    todos: [
      {
        item: 'Meditate',
        completed: false,
        id: 28118728
      },
      {
        item: 'Workout',
        completed: false,
        id: 28118729
      },
      {
        item: 'Code Challenges/Tk kit',
        completed: false,
        id: 28118730
      }
    ]
  }
  
  export const todoReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        const newTodo = {
          item: action.payload,
          completed: false,
          id: Date.now()
        };
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      case 'COMPLETE_TASK':
        return {
          ...state,
        };
      case 'CLEAR_TODOS':
        return {
          ...state,
          todos: [...state.todos.filter( todo => !todo.completed)]
        }
      default:
        return state;
    }
  }