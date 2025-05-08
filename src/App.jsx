import { useState, useEffect, useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './App.scss';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
  
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
  
    return [];
  });

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [filter, setFilter] = useState('all')


  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodoAlert = (text) => {
    alert(`Заметка: ${text}, добавлена`);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    addTodoAlert(text);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if(filter === 'completed') return todo.completed;
    if(filter === 'active') return !todo.completed;
    return true;
  })

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__heading">Список задач</h1>
        <button className="app__theme-toggle button" onClick={toggleTheme}>
           Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
        </button>
        <div className='app__filter'>
          <button onClick={() => setFilter('all')} className="app__filter-btn button">Все</button>
          <button onClick={() => setFilter('active')} className="app__filter-btn button">Невыполненные</button>
          <button onClick={() => setFilter('completed')} className="app__filter-btn button">Выполненные</button>
        </div>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;