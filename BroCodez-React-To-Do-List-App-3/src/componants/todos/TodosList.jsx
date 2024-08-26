
const ListGen = ({ listArr }) => listArr.map(item => <li>
    {item.id}
    <br />
    {item.title}
    <br />
    {item.completed ? 'Completed' : 'Not Completed'}
</li>)


const TodosList = ({ todos }) => {
    console.log("todos", todos)
    return (
        <>
            <h3>Todos List</h3>
            <ul>
                <ListGen listArr={todos} />
            </ul>
        </>
    )

}
export default TodosList