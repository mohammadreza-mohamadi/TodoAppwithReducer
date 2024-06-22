import { useState } from "react"
import Todoes from "./Todoes";

function Todo({todo,todoStatusHandler,delTodo,editTodo,updateTodoContent}) {
  const [isEditing,setIsEditing] = useState(false)
  
  return (
    <>
        {isEditing ? 
            <li><input type="checkbox" checked={todo.done ? true : false} onChange={()=>todoStatusHandler(todo.id)} />
            <input type="text" value={todo.content}  onChange={(e)=>updateTodoContent(todo.id,e.target.value)} /><button onClick={()=>delTodo(todo.id)}>Del</button><button  onClick={()=>{editTodo(todo.id);setIsEditing(false)}}>Save</button></li>
            :
            <li><input type="checkbox" checked={todo.done ? true : false} onChange={()=>todoStatusHandler(todo.id)} />
            {todo.content}<button onClick={()=>delTodo(todo.id)}>Del</button><button  onClick={()=>setIsEditing(true)}>Edit</button></li>  
        }
    </>
  )
}

export default Todo