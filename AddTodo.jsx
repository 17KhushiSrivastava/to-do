import { useState } from "react"
export function AddTodo(props){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(newItem)
        setNewItem("")
    }

    return(
        <form onSubmit = {handleSubmit} className = "new-item-form">
            <div className="form-row">
                <input 
                value = {newItem} 
                autoComplete="off"
                required
                placeholder="Add task..."
                onChange={e => setNewItem(e.target.value)}
                type="text" 
                style={{
                    width: 300,
                    height: 40,
                    padding: 0.5,
                    fontSize: 20
                }}
                id="form"></input>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}