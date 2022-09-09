import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => (
          <Todo toggle={this.props.toggleItem} key={item.id} item={item}/>
        ))}
        
      
      </div>
    )
  }
}
