
const TodoListGen = ({ itemsArr }) => itemsArr.map(item => <li key={item.id}>{item.title}</li>)

const TodosList = ({ itemsArr }) => {
    
    return (
        <ul>
            <TodoListGen itemsArr={itemsArr} />
        </ul>
    )
}

export default TodosList