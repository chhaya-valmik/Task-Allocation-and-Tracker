import React from 'react'
import './CompleteTask.css';

const FailedTask = ({data}) => {
    return (
        <div className='stask_list' id='foL'>
                <div className='task-header'>
                    <h3 className='task-status'>{data.category}</h3>
                    <h4 className='task-date'>{data.date}</h4>
                </div>
                <h2 className='task-title'>{data.title}</h2>
                <p className='para'>{data.description}</p>
                <div className='CT'>
                    <button className='CTB'>Failed</button>
                </div>
            </div>

    )
}

export default FailedTask