import { useState } from "react"

export default function TodoCreate({createTodo}){

    const [title, setTitle] = useState('')

    const handelSubmit = (e) =>{
      e.preventDefault()

      if (!title.trim()){
         return setTitle("")
      }
      createTodo(title)
      setTitle("")
    }

    return(
        <form onSubmit={handelSubmit} className="transition-all duration-1000 dark:bg-gray-800 rounded-md bg-white overflow-hidden py-4 flex gap-2 items-center px-4 mt-8">
          <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}  
            placeholder="Create a nwe ToDo" 
            className="transition-all duration-1000 w-full text-gray-500 outline-none dark:text-gray-300 dark:bg-gray-800"
          />
        </form>
    )
}