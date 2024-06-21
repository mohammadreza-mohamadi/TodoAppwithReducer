import Todo from "./Todo"

function Todoes({todoes,todoStatusHandler,delTodo,editTodo}) {
  return (
    <>
    {
        todoes.length &&
        todoes.map(todo=>
            <Todo todo={todo} key={todo.id} todoStatusHandler={todoStatusHandler} delTodo={delTodo} editTodo={editTodo} />
      )
    }
    </>
  )
}

export default Todoes