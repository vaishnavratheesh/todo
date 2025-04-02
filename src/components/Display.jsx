import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/Display.css';

const Display = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("https://todobackend-xguo.onrender.com/api/items");
            console.log("Fetched todos:", response.data);
            setTodos(response.data);
            setError('');
        } catch (error) {
            console.error("Error fetching todos:", error);
            setError("Failed to fetch todos. Please try again.");
        }
    };

    return (
        <div className="display-container">
            <div className="todo-list">
                {error ? (
                    <div className="error-message">{error}</div>
                ) : todos.length === 0 ? (
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