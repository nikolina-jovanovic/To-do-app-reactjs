import React, {useState} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/App.css'

const App = () => {

    const [todos, setTodos] =  useState([])

    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        )

    }

    const removeTodo = (id) => {
        setTodos(
            todos.filter((todo) => 
                todo.id !== id
            )
        )
    }

    return (
        <div className="container">
            <h2 className="title">What's your plan for today?</h2>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>

        </div>
    )
}

export default App;