import React, { useState } from 'react'

function AddTodo({addTodo}) {
  const [todo,setTodo]=useState('')
  return (
    <>
             <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
             <button onClick={()=>addTodo(todo)}>Add Todo</button>
    </>
  )
}

export default AddTodo