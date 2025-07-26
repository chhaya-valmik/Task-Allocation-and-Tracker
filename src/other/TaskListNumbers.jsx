import React from 'react'
import './TaskListNumbers.css';

const TaskListNumbers = ({data}) => {
    return (
        <div className='taskListNumbers'>
            <div className='fDiv'>
                <h2 className='taskNum'>{data.taskCounts.newTask}</h2>
                <h3 className='newTask'>New Task</h3>
            </div>
            <div className='sDiv'>
                <h2 className='taskNum'>{data.taskCounts.completed}</h2>
                <h3 className='newTask'>Completed Task</h3>
            </div>
            <div className='tDiv'>
                <h2 className='taskNum'>{data.taskCounts.active}</h2>
                <h3 className='newTask'>Accepted</h3>
            </div>
            <div className='foDiv'>
                <h2 className='taskNum'>{data.taskCounts.failed}</h2>
                <h3 className='newTask'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers