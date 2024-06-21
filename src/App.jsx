import { useReducer } from "react"
import Todoes from "./component/Todoes"
const initialState=[
  {id:0,content:'this is todo 1',done:true},
  {id:1,content:'this is todo 2',done:false},
  {id:2,content:'this is todo 3',done:true}
]

function reducerTodo(state,action)
{
    switch(action.type)
    {
       case "statusTodo" : 
       {
          let updTodo = state.map(todoEl=>{
              if(todoEl.id === action.payload.todoId)
              {
                return {...todoEl,done:!todoEl.done}
              }
              return todoEl
          })
          return updTodo;
       }
    }
}
function App() {
  const [todoes , dispatch] = useReducer(reducerTodo,initialState)
  const todoStatusHandler =(todoId)=>{
     dispatch({type : "statusTodo",payload:{todoId}})
  }
  const delTodo =(todoId)=>{
     // dispatch({type:"deleteTodo",payload:{todoId}})
  }
  const editTodo =(todoId)=>{
   // dispatch({type:"editTodo",payload:{todoId}})
  }
  return (
     <div>
         <h2>Todo App with useReducer Hook</h2>
         <div className="AddTodo">
             <input type="text" value={todoes.content} />
             <button>Add Todo</button>
         </div>
         <div className="todoesList">
             <Todoes todoes={todoes} todoStatusHandler={todoStatusHandler} />
         </div>
     </div>
  )
}

export default App
