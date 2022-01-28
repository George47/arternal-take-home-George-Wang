import React from 'react';

// assets imports
import '../assets/css/TodoList.css';
import Logo from '../assets/images/Arternal.svg';

// MUI component imports
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

class TodoList extends React.Component {
    constructor() {
        super();

        // initiate to-do list with sample placeholders within state
        this.state = {
            todos: [
                {
                    description: 'Walk the dog',
                    completed: false,
                    created: 1643387302843,
                }, {
                    description: 'Clean the kitchen',
                    completed: true,
                    created: 1643387315157,
                }
            ]
        }
    }

    // create new list on event
    createNewTodo = (e) => {
        // listens on enter key
        if (e.which === 13) {
            let ele = e.target;

            let listinfo = {
                description: ele.value,
                completed: false,
                created: Date.now(),
            }

            let newlist = this.state.todos;
            newlist.push(listinfo);

            this.setState({
                todos: newlist
            });
            ele.value = ""
        }
    }

    // toggle completed
    toggleCompletion = (index) => {
        let data = this.state.todos;

        // toggle
        data[index].completed = !data[index].completed;

        this.setState({
            todos: data
        });
    }

    // delete to-do list item
    deleteItem = (index) => {
        let data = this.state.todos;

        // remove todo item
        data.splice(index, 1);

        this.setState({
            todos: data
        });
    }

    render() {
        return (
            <div className='container'>
                {/* app header */}
                <div className='app-title'>
                    <img src={Logo} alt='' className='logo' />
                    <div className='subtitle'><h2>ToDoList App</h2></div>
                </div>
                {/* to-do list content */}
                <h3>List of To-dos</h3>
                <div className='add-todos'>
                    <InputLabel htmlFor='input-with-icon-adornment'>
                        Add To-do
                    </InputLabel>
                    <Input
                        id='input-with-icon-adornment'
                        onKeyPress={this.createNewTodo}
                        startAdornment={
                            <InputAdornment position='start'>
                                <AddIcon />
                            </InputAdornment>
                        }
                    />
                </div>
                <ul className='todo-list'>
                    {
                        this.state.todos.map((v, k) => {
                            return (
                                <div key={k} className='todo-list-item'>
                                    <li>
                                        <div className='todo-list-row'>
                                            <Tooltip title={v.completed ? 'Clicking this would move the item back to to-do': 'Clicking this would mark this item as completed'} 
                                                     placement='top'>
                                                <Checkbox {...label} checked={v.completed} onChange={this.toggleCompletion.bind(this, k)} />
                                            </Tooltip>
                                            <div className='todos-description'>
                                                {v.completed ? <span className='completed-todos'>{v.description}</span> : <span className=''>{v.description}</span>}
                                            </div>
                                            <Tooltip title={new Date(v.created).toString()} placement='top'>
                                                <div className='todo-created'>{new Date(v.created).toDateString()}</div>
                                            </Tooltip>
                                            <IconButton className='todo-delete' onClick={this.deleteItem.bind(this, k)}>
                                                <DeleteIcon />
                                            </ IconButton>
                                        </div>
                                    </li>
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