import { OneTodo } from "./OneTodo"

export function ItemList({ todos, toggleTodo, deleteTask }){
    return(
        <ul className="list">
            {todos.length === 0 && <span className="no-tasks">No tasks listed</span>}
            {todos.map(todo => {
                return(
                    <OneTodo 
                    id ={todo.id} 
                    completed={todo.completed}
                    title = {todo.title}
                    toggleTodo={toggleTodo}
                    deleteTask={deleteTask}
                    key = {todo.id}
                    />
                )
             })}
        </ul>
    )
}