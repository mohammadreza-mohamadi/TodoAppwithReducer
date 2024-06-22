import { useReducer } from "react"
import Todoes from "./component/Todoes"
import AddTodo from "./component/AddTodo"
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

       case "updTodo" :
        {
          let updTodo = state.map(todoEl=>{
            if(todoEl.id === action.payload.todoId)
            {
              return {...todoEl,content:action.payload.content}
            }
            return todoEl
        })
          return updTodo;
        }

        case "addTodo" :
          {  
             let newTodo ={id:state.length,content:action.payload.todo,done:false}
             let newState = [...state,newTodo]
             return newState;
          }
        case "deleteTodo":
          {
             let newState = state.filter(td=>td.id !== action.payload.todoId)
             return newState;
          }
    }
}
function App() {
  const [todoes , dispatch] = useReducer(reducerTodo,initialState)
  const todoStatusHandler =(todoId)=>{
     dispatch({type : "statusTodo",payload:{todoId}})
  }
  const delTodo =(todoId)=>{
      dispatch({type:"deleteTodo",payload:{todoId}})
  }

  const updateTodoContent=(todoId,content)=>{
    dispatch({type : "updTodo",payload:{todoId,content}})
  }

  const addTodo =(todo)=>{
    if(todo.length)
    {  
      dispatch({type:'addTodo',payload:{todo}})
    }
  }
  return (
     <div>
         <h2>Todo App with useReducer Hook</h2>
         <div className="AddTodo">
             <AddTodo addTodo={addTodo} />
         </div>
         <div className="todoesList">
             <Todoes todoes={todoes} todoStatusHandler={todoStatusHandler} delTodo={delTodo}  updateTodoContent={updateTodoContent} />
         </div>
     </div>
  )
}

export default App
