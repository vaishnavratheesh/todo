import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Input.css';

const Input = () => {
  const [todoText, setTodoText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      try {
        const response = await axios.post("http://localhost:3000/api/items", {
          title: todoText.trim()
        });
        console.log("Item added successfully:", response.data);
        setTodoText('');
        setError('');
        // Refresh the page to show new todo
        window.location.reload();
      } catch (error) {
        console.error("Error adding todo:", error);
        setError("Failed to add todo. Please try again.");
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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;