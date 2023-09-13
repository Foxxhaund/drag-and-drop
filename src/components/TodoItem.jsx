import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import React from "react";

// eslint-disable-next-line react/display-name
const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => {
    const{id, title, completed} = todo
        return(
            <article {...props} ref={ref} className="flex gap-2 items-center border-b border-b-grey-400 dark:bg-gray-800">
                <button className={`${
                    completed ? 
                    "grid  place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" :   
                    "inline-block"
                    } h-5 w-5 rounded-full border-2 flex-none transition-all duration-1000`
                } onClick={() => updateTodo(id)}>
                    {completed && <CheckIcon/>}   
                </button>
                <p className={`transition-all duration-1000 text-gray-600 grow ${completed && "line-through"} dark:text-gray-300`}>{title}</p>
                <button className="flex-none" onClick={() => removeTodo(id)}><CrossIcon/></button>
            </article>
        )
}
)
export default TodoItem