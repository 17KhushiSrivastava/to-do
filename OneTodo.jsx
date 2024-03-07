export function OneTodo({ completed, id, title, toggleTodo, deleteTask }){
    return(
        <li 
            style={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "gray" : "#182c1f",
            fontWeight: "bold"
            }}
        >
      <label>
        <input type="checkbox" 
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
       onClick={() => deleteTask(id)}
       className="btn btn-danger">
        Delete
        </button>
    </li>
    );
}