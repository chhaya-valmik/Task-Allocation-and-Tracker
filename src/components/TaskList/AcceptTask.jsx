import React from 'react'
import './AcceptTaks.css';

const AcceptTask = ({data}) =>{
    console.log();
    return (
        <div className='stask_list'>
                <div className='task-header'>
                    <h3 className='task-status'>{data.category}</h3>
                    <h4 className='task-date'>{data.date}</h4>
                </div>
                <h2 className='task-title'>{data.title}</h2>
                <p className='para'>{data.description}</p>
                <div className='button-cont'>
                    <button className='btn green-btn'>Mark as Completed</button>
                    <button className='btn red-btn'>Mark as Failed</button>
                </div>
            </div>
    )
}

export default AcceptTask