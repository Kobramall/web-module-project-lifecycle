import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {props.list.map(item => (
          <ToDo toggle={props.toggleItem} key={item.id} item={item}/>
        ))}
        
      
      </div>
    )
  }
}
