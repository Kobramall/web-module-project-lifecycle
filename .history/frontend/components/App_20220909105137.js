import React from 'react'
import TodoList from './TodoList';
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
 constructor(){
  super();
  this.state= {list: [{
    name: '',
    id: 0,
    done: false
  }]
}
 }
 
  render() {
    return 
    <div>
      <h1>ToDo app</h1>
      <h3>ToDos:</h3>
      <TodoList />
      <Form />
    </div>
  }
}
