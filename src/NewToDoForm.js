import React, { Component } from 'react';
import Todo from './Todo';
const { v4: uuidv4 } = require('uuid');

class NewToDoForm extends Component {
    constructor(props) {
        super(props)

        this.state = { task: "", dueDate:""}
        this.handleChange =  this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState ({
            [e.target.name] : e.target.value
        }) 
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.createTask({...this.state, id: uuidv4()})
        this.setState ({
            task: ""
        })
    }

    render() {
        return (
            <div>
                <form >
                    <label htmlFor="task"> Task: </label>
                    <input name="task" id="task" value={this.state.task} onChange={this.handleChange}></input>
                    <label htmlFor="dueDate"> Due Date: </label>
                    <input name="dueDate" id ="dueDate" value={this.state.dueDate} onChange={this.handleChange}></input>

                    <button onClick={this.handleSubmit}>Add Task</button>
                </form>
            </div>
        );
    }
}

export default NewToDoForm;