import React, {useContext} from 'react'
import './AllTask.css'
import {AuthContext} from '../context/AuthProvider'

const AllTask = () =>{

    const [userData, setUserData] = useContext(AuthContext)
    
    return (
        <div className='eCont'>

            <div className='eHead'>
                <h2>Employee Name</h2>
                <h3>New Task</h3>
                <h5>Active Task</h5>
                <h5>Completed</h5>
                <h5>Failed</h5>
            </div>

            <div>
                {userData.map(function(elem, idx){
                return ( <div key={idx} className='empR'>
                <h2>{elem.firstName}</h2>
                <h3>{elem.taskCounts.newTask}</h3>
                <h5 className='st'>{elem.taskCounts.active}</h5>
                <h5 className='comple'>{elem.taskCounts.completed}</h5>
                <h5 className='failed'>{elem.taskCounts.failed}</h5>
            </div>
                );
            })}
            </div>

    </div>
    )
}

export default AllTask