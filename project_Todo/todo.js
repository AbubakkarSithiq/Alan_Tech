import React, { useState } from 'react'
import List from './list'
import './style.css'

function Todo() {
    const [todoname, setTodoname] = useState('');
    const [lists, setLists] = useState([]);
    // const [write, setWrite] = useState();

    const handleChange = (e) => {
        setTodoname(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();

        if (todoname.trim() === '') {
            alert('Enter Something')
        }
        else {
            setLists([...lists, {
                name: todoname,
                id: Math.floor(Math.random() * 100),
                completed: false
            }])
            console.log(lists);
            setTodoname('');
        }
    };

    const Strike = (list) => {
        let newList = lists.map(listItem => {
            if (listItem.id === list.id) {
                return {
                    ...listItem,
                    completed: !listItem.completed
                }
            }
            return listItem
        })
        setLists(newList);
        console.log(list)

    };


    const Delete = (list) => {
        let newList = lists.filter(listItem => {
            if (listItem.id === list.id) {
                return false
            }
            return true
        })
        setLists(newList);
        // console.log(lists)
    };
    return (
        <div className='container'>
            <div>
                <h1>Todo List</h1>
            </div>

            <div>
                <form>
                    <input placeholder="Enter To-Do" type='text' value={todoname} onChange={handleChange} />
                    <button className='add' onClick={addTodo}>Add</button>
                </form>
            </div>

            {
                lists.map(list => {
                    return (
                        <List key={list.id} obj={list} Delete={Delete} Strike={Strike} />
                    )
                })
            }
        </div>
    )
}

export default Todo
