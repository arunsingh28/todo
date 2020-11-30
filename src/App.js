import React from 'react';
import './App.css';
import List from './listItem'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItem:{
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem]
      this.setState({
        items:newItems,
        text: '',
        key : ''
      })
    }
  }


  render(){
    return (
      <div className="App">
        <h1>Todo List</h1>
      <header>
        <form id="todo-form" onSubmit={this.addItem}>
          <input type="text" 
          placeholder="Enter Task"
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <List items = {this.state.items}></List>
      </header>
      </div>
    )
  }
}

export default App;
