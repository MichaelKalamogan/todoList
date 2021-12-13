import React, { Component } from "react";
import NewToDoForm from "./NewToDoForm";
import Todo from "./Todo";


class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = { tasks: []}


        this.createTask =this.createTask.bind(this)
        this.removeTask=this.removeTask.bind(this)
    }

    createTask(obj) {
        this.setState({tasks: [...this.state.tasks, obj]})
    }

    removeTask(id) {
        this.setState({tasks: this.state.tasks.filter(el => el.id !==id)})
    }

    updateTask(id) {
        
    }

  render() {

    const renderTasks = this.state.tasks.map (item => 
        <Todo todo={item.task} due={item.dueDate} id={item.id} key={item.id} removeTask={this.removeTask}/>
    )
    return (
      <div>
        <NewToDoForm createTask={this.createTask}/>
        {renderTasks}
      </div>
    );
  }
}

export default ToDoList;
