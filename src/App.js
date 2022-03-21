import './App.scss';
import { TodosList } from './components/TodosLists/TodosLists';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos);
  const completed = todos.filter(todo => todo.checked === true);

  return (
    <div className="Todo">
      <div className='Todo__header'>
        <h1 className='Todo__header-title'>My Tasks</h1>
        <p className='Todo__header-text' hidden={todos.length > 0 ? false : true}>{completed.length > 0
        ? `${completed.length} of ${todos.length} tasks`
        : `${todos.length} tasks`
        }</p>
        <AddTodoForm />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
