import React from 'react'
import './style.css'

function List({ obj, Strike, Delete }) {
    return (
        <div className='list'>
            <div className={obj.completed ? 'complete' : 'incomplete'}>
                <span className='p'>{obj.name}</span>
                <span className='icon'>
                    <i onClick={() => Strike(obj)} className={(obj.completed) ? 'bi bi-x-circle-fill' : 'bi bi-check-circle-fill'}></i>
                    <i className=' bi bi-trash3-fill' onClick={() => Delete(obj)}></i>
                </span>
            </div>
        </div>
    )
}

export default List
