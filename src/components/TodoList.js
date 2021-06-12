import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, toggleComplete ,removeTodo}) => {
    return (
        <div>
            <h3 className="todo-container">
           {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
                  )
            )}
            </h3>
        </div>
    )
}


export default TodoList;