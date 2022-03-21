import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: '1', title: 'first todo', checked: false},
  {id: '2', title: 'second todo', checked: false},
]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload)
    },
    todoDeleted(state, action) {
      return state.filter(todo => todo.id !== action.payload)
    },
    todoChecked(state, action) {
      return state.map(todo => todo.id === action.payload ? {...todo, checked: !todo.checked} : todo)
    }
  }
});

export const { todoAdded, todoDeleted, todoChecked } = todosSlice.actions;

export default todosSlice.reducer