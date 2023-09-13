import TodoItem from "./TodoItem";
import {  Droppable, Draggable } from '@hello-pangea/dnd' 


export default function TodoList({todos, removeTodo, updateTodo}){


    return(
        <Droppable droppableId="todos">
            {
                (droppableProvider) => (
                <div ref={droppableProvider.innerRef}
                {...droppableProvider.droppableProps}
                className="bg-white rounded-md [&>article]:p-4 mt-8">
                    {
                        todos.map((todo,index) => (
                        <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                            {
                                (draggbleProvider) => (
                                    <TodoItem 
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                        ref={draggbleProvider.innerRef }
                                        {...draggbleProvider.dragHandleProps}
                                        {...draggbleProvider.draggableProps}
                                    />
                                )
                            }
                            
                        </Draggable>
                        ))
                    }  
                    {droppableProvider.placeholder}
                </div>
                )
            }
        </Droppable>
    )
}