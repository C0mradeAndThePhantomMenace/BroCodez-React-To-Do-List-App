import React, { useState } from 'react'

const TodoAdd = ({ handleTodoAdd }) => {
    const [newTask, setNewTask] = useState("")
    const handleInputChange = (event) => setNewTask(event.target.value)

    return (
        <div>
            <h3>New Task</h3>
            <input
                type="text"
                name=""
                id=""

                placeholder='Enter a new task...'
                value={newTask}
                onChange={handleInputChange}
            />
            <button className="add-button" onClick={handleTodoAdd}>Add</button>
        </div>)
}

export default TodoAdd
