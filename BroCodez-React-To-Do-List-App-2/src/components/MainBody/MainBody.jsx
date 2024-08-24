import React, { useState } from 'react'

import {
    TodoAdd,
    TodosList,

    itemsFakeData
} from '../todos'

const handleTodoAdd = (params) => {
    console.log("handleTodoAdd")
}

const MainBody = () => {
    const [todos, setTodos] = useState([...itemsFakeData])
    return (
        <main>
            <h2>Main Body</h2>
            <hr />
            <TodoAdd handleTodoAdd={handleTodoAdd} />
            <hr />
            <TodosList itemsArr={todos} />
        </main>
    )
}

export default MainBody
