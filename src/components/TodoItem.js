import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      borderBottom: '1px dotted #ccc',
      height: '30px'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p style={{lineHeight: '30px'}}>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {'   '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
