import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {BsCheckBox} from 'react-icons/bs'


const Todo = ({todo, toggleComplete, removeTodo }) => {

    const handleCross = () => {
        toggleComplete(todo.id);
    }

    const handleRemoveClick = () => {
        removeTodo(todo.id)
    }


    return (
        <div className="todo-row">
            <BsCheckBox style={{cursor:"pointer"}} onClick={handleCross} checked={todo.completed}></BsCheckBox>
            <p style={{
                textDecoration: todo.completed ? "line-through" : null,
                color: todo.completed ? "rgb(26, 26, 26)" : null
              }} >{todo.task}</p>
            <div>
                <RiCloseCircleLine className="delete-icon" onClick={handleRemoveClick}/>
            </div>
        </div>
    )
}


export default Todo;