import React from 'react';

export const Input = ({todoText, setTodoText, setIsCompleted, isCompleted}) => {
    function handleTodoInputChange(e) {
        setTodoText(e.target.value);
    }

    function handleCheckboxChange(e) {
        setIsCompleted(e.target.checked);
    }

    return (
        <div>
            <input
                type="text"
                value={todoText}
                onChange={handleTodoInputChange}
                placeholder="Добавить сюда"
            />
            <label htmlFor="is-completed">
                <input
                    type="checkbox"
                    id="is-completed"
                    checked={isCompleted}
                    onChange={handleCheckboxChange}
                />
                Completed
            </label>
        </div>
    );
}
// GitHub is really strange last time. It is loaded another project from another file