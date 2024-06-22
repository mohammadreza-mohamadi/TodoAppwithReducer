import Todo from "./Todo"

function Todoes({todoes,todoStatusHandler,delTodo,editTodo,updateTodoContent}) {
  return (
    <>
    {
        todoes.length &&
        todoes.map(todo=>
            <Todo todo={todo} key={todo.id} todoStatusHandler={todoStatusHandler} delTodo={delTodo} editTodo={editTodo} updateTodoContent={updateTodoContent} />
      )
    }
    {console.log(todoes)}
    </>
  )
}

export default Todoes