import React from 'react';

// assets imports
import '../assets/css/TodoList.css';

class TodoList extends React.Component {
    constructor() {
        super();

        // initiate to-do list with sample placeholders within state
        this.state = {
            todos: [
                {
                    description: "Walk the dog",
                }, {
                    description: "Clean the kitchen",
                }
            ]
        }
    }

    render() { 
        return (
            <div className="container">
                {/* app header */}
                <div className="app-header">
                    test
                </div>
                {/* to-do list content */}
                <h3>List of To-dos</h3>
                <ul className="todo-list">
                    {
                        this.state.todos.map((v,k) => {
                            return (
                                <div key={k}>
                                    {v.description}
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default TodoList;