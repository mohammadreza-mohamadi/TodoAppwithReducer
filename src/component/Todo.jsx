
function Todo({todo,todoStatusHandler,delTodo,editTodo}) {
  return (
    <>
            <li><input type="checkbox" checked={todo.done ? true : false} onChange={()=>todoStatusHandler(todo.id)} />
            {todo.title}<button onClick={()=>delTodo(todo.id)}>Del</button><button  onClick={()=>editTodo(todo.id)}>Edit</button></li>
    </>
  )
}

export default Todo