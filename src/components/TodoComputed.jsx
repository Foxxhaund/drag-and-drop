export default function TodoComputed({clearCompleted,computedIntemLeft}){

    return(
        <section className="flex justify-between rounded-b-md bg-white dark:bg-gray-800 py-4 px-4 transition-all duration-1000">
                <span className="text-gray-400 dark:text-gray-300">{computedIntemLeft} items left</span>
                <button className="text-gray-400 dark:text-gray-300" onClick={clearCompleted}>Clear completed</button>
        </section> 
    )
}