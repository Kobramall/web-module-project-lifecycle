import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      item: ""
    }
  }
  handleChanges = e => {
    e.preventDefault()
    this.setState({
      ...this.state, item: e.target.value
    })
  }
  
  submitForm = e =>{
    e.preventDefault();
    this.props.addItem(e, this.state.item);
  }
  
    render() {
      return (
        <div>
          <form onSubmit ={this.submitForm}>
           <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
           <button>add</button>
          </form> 
          <button onClick={this.props.clear}>Clear</button>
        </div>
      )
    }
  }