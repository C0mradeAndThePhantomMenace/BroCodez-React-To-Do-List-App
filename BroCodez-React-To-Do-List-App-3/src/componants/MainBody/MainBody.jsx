import './MainBody.css'

import React, { useState } from 'react'


import {
    TodoAdd,
    TodosList
} from '../todos'

const MainBody = ({ todosListArr }) => {
    const [todos, setTodos] = useState([...todosListArr])
    return (
        <main>
            <h2>Main Body</h2>
            <hr />
            <TodoAdd />
            <hr />
            <TodosList todos={todos} />
        </main>
    )
}

export default MainBody