import React, {useState} from 'react'


const TodoForm = ({addTodo}) => {

    const[todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    const handleChange = (e) => {
        setTodo({...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: Math.floor(Math.random() * 10000)})
            setTodo({...todo,task: ""})
        }else{
            alert('Add an item please')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Add an item..." name="task" value={todo.task} onChange={handleChange}/>
            <button type="submit" className="todo-button">Add</button>
        </form>
    )
}


export default TodoForm;