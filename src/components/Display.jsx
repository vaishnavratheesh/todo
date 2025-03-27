import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/Display.css';

const Display = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []); // Add empty dependency array to prevent infinite loop

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/items");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    return (
        <div className="display-container">
            <div className="todo-list">
                {todos.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-state-icon">📝</div>
                        <p>No tasks yet. Add your first task to get started!</p>
                    </div>
                ) : (
                    todos.map((todo) => (
                        <div key={todo._id} className="todo-item">
                            <div className="checkbox" />
                            <span className="todo-text">
                                {todo.title}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Display;