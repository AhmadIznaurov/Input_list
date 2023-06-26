import React from 'react';

export const Button = ({todos, todoText, setTodos, isCompleted, setIsCompleted, setTodoText}) => {

    function handleAddTodoClick(e) {
        e.preventDefault();

        if (!todoText) return;

        const newTodo = {
            text: todoText,
            isCompleted: isCompleted,
        };

        setTodos([...todos, newTodo]);
        setTodoText('');
        setIsCompleted(false);
    }

    function handleDeleteTodoClick(index) {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    function handleCompleteTodoClick(index) {
        const updatedTodos = [...todos];
        updatedTodos[index] = {
            ...updatedTodos[index],
            isCompleted: !updatedTodos[index].isCompleted,
        };
        setTodos(updatedTodos);
    }


    return (
        <div>
            <button onClick={handleAddTodoClick}>Добавить</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                    <span className={todo.isCompleted ? 'completed' : ''}>
                        {todo.text}
                    </span>
                        <button onClick={() => handleDeleteTodoClick(index)}>
                            Удалить
                        </button>
                        <button onClick={() => handleCompleteTodoClick(index)}>
                            {todo.isCompleted ? 'Неполный' : 'Полный'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
