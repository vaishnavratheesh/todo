import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Input.css';

const Input = () => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      try {
        await axios.post("http://localhost:3000/items", {
          title: todoText.trim()
        });
        setTodoText('');
        // Refresh the page to show new todo
        window.location.reload();
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <div className="input-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button 
          type="submit" 
          className="submit-btn"
          disabled={!todoText.trim()}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Input;