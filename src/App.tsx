import React, { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    // created model.ts and imported it to provide types for our Todo Array
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };
    console.log(todos);
    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList />
        </div>
    );
};

export default App;
