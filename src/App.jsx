import { useReducer } from "react"
const initialState=[
  {id:0,content:'this is todo 1',done:true},
  {id:1,content:'this is todo 2',done:false},
  {id:2,content:'this is todo 3',done:true}
]
function App() {
  const [todoes , dipatch] = useReducer(reducerTodo,initialState)
  return (
     <div>
         <h2>Todo App with useReducer Hook</h2>
         <div className="AddTodo">
             <input type="text" value={todoes.content} />
             <button>Add Todo</button>
         </div>
         <div className="todoesList">
             <Todoes todoes={todoes} />
         </div>
     </div>
  )
}

export default App
