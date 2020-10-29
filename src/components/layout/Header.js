import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header style={styleHeader}>
      <h1>ToDoList</h1>
      <Link style={linkStyle} to="/todo-list">Home</Link> | <Link style={linkStyle} to="/todo-list/about">About</Link>
    </header>
  );
}

const styleHeader = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header