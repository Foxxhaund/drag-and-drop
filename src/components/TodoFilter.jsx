export default function TodoFilter({setFilterTodo, filter}){

    return(
        <section className="container mx-aouto mt-8">
          <div className="transition-all duration-1000 bg-white dark:bg-gray-800 p-4 rounded-md flex justify-center gap-4">
            <button className={`${filter === "all" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"} transition-all duration-1000`} onClick={() => setFilterTodo("all")}>All</button>
            <button className={`${filter === "active" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"} transition-all duration-1000`} onClick={() => setFilterTodo("active")}>Active</button>
            <button className={`${filter === "completed" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"} transition-all duration-1000`} onClick={() => setFilterTodo("completed")}>Complited</button>
          </div>
        </section>
    )
}