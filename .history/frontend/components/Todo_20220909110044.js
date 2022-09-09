import React from 'react'

export default class Todo extends React.Component {
  
  
  
  render() {
    return (
      <div className={`item${this.props.item.done ? 'done' : ''}`}
      onClick={() => this.props.toggle(this.props.item.id)}>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}
