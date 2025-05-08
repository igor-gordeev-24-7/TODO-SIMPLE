import { useState } from 'react';
import './AddTodo.scss';

function AddTodo ({addTodo}) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!text.trim()) return;
		addTodo(text);
		setText('');
	}

	return (
		<form onSubmit={handleSubmit} className="add-todo__form">
			<input 
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Добавить задачу"
				className="add-todo__input input"
			/>
			<button 
				type="submit"
				className="add-todo__button button"
			>Добавить</button>
		</form>
	)		
}
export default AddTodo;