import './TodoItem.scss';

function TodoItem({todo, deleteTodo, toggleComplete}) {
	return (
		<li className={`todo-item__li ${todo.completed ? 'completed' : ''}`}>
			<span 
				onClick={() => toggleComplete(todo.id)}
				className="todo-item__span"
				>{todo.text}
			</span>
			<input 
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleComplete(todo.id)}
			/>
			<button
				onClick={() => deleteTodo(todo.id)}
				className="todo-item__button button"
				>Удалить
			</button>
		</li>
	)
}
export default TodoItem;