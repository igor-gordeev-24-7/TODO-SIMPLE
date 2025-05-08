import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList({todos, deleteTodo, toggleComplete}) {
	return (
		<ul className="todo-list__ul">
			{todos.map((todo) => (
				<TodoItem 
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					toggleComplete={toggleComplete}
				/>
			))}
		</ul>
	)
}
export default TodoList;