import { DragDropContext } from '@hello-pangea/dnd' 

import { useEffect, useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function App() {
 
  const [todos, setTodos] = useState(initialStateTodos)
  const [filterTodo,setFilterTodo] = useState("all")

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }
    setTodos([...todos,newTodo])
  }
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false))
  }

  const filteredTodo = () => {
    switch(filterTodo){
      case "all":
        return todos
      case "active": 
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }

  const handleDragEnd = (result) =>{
    const {destination, source} = result
    if(!destination) return
    if(source.index === destination.index && source.droppableId === destination.droppableId) return
    setTodos((prevTasks) => reorder(prevTasks, source.index, destination.index))
  }

  const computedIntemLeft = todos.filter((todo) => !todo.completed).length
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-200 dark:bg-gray-900 min-h-screen transition-all duration-1000 md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]" >
      <Header />
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo}/>
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos={filteredTodo()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </DragDropContext>
        <TodoComputed clearCompleted={clearCompleted} computedIntemLeft={computedIntemLeft}/>
        <TodoFilter setFilterTodo={setFilterTodo} filter={filterTodo}/>
      </main>
      

      <footer className="mx-auto px-4 mt-8 md:max-w-xl mt-8 text-center dark:text-gray-300 transition-all duration-1000 md:max-w-xl"> 
        drag an drop to reorder list
      </footer>
    </div>
  )
}

export default App
