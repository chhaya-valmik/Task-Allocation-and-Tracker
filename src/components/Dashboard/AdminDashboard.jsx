import React from 'react'
import Header from '../../other/Header'
import './AdminDashboard.css'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = (props) => {
    return (

        <div className='AD'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard