import React from 'react'
import TodoList from './TodoList';
import Form from './Form'
import axios from 'axios';



const fetchToDo = () => {

}

export default class App extends React.Component {
 constructor(){
  super();
  this.state= {list:   axios.get('http://localhost:9000/api/todos')
  .then(res =>console.log(res.data.data))
  .catch(err=> console.error(err))
}
console.log(fetchToDo())
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
