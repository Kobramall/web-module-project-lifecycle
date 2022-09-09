import React from 'react'
import TodoList from './TodoList';
import Form from './Form'
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

const fetchToDo = () => {
  console.log(axios.get(URL))
  return axios.get(URL)
}

export default class App extends React.Component {
 constructor(){
  super();
  this.state= {list: [{
    name: 'Trash',
    id: 0,
    done: false
  }]
}
fetchToDo()
 }

 addItem = (e, item) =>{
  e.preventDefault();
   const newItem = {
      name: item,
      id: Date.now(),
      done: false
   }
  this.setState({...this.state, list: [...this.state.list, newItem]})
}

toggleItem = itemId => {
  this.setState({...this.state, list: this.state.list.map(item =>{
    if(itemId === itemId){
     return {...item, done: !item.done}
    }
   return item;
  }) })
}

clearPurchased = () => {
  this.setState({...this.state, list: this.state.list.filter(item =>{
    if(item.done === false) return item
  })})
}

componentDidMount(){
  fetchToDo()
  .then(res =>{
    console.log(res.data.data.map(item =>{
      return item.name
    })
    this.setState({name: res.data.message.date.name})
  })
}

 
  render() {
    return (
    <div>
      <h1>ToDo app</h1>
      <h3>ToDos:</h3>
      <TodoList toggleItem={this.toggleItem} addItem={this.addItem} list={this.state.list}/>
      <Form clear={this.clearPurchased} addItem={this.addItem} item={this.state}/>
    </div>
    )
  }
}
