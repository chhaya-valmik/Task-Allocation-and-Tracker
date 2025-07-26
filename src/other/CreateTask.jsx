import React, { useContext, useState } from 'react'
import {AuthContext} from '../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTaskTitle] = useState('')
    const [description, setTaskDescription] = useState('')
    const [date, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
       // console.log(taskTitle, taskDescription, taskDate, asignTo, category)

       setNewTask({title, description, date, category, active:false, newTask:true, failed:false, completed:false})
       
       const data = userData
       data.forEach(function(elem){
        if(asignTo == elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask+1
        }
       })

       setUserData(data)
       console.log(data);

       setTaskTitle('')
       setCategory('')
       setAsignTo('')
       setTaskDate('')
       setTaskDescription('')
    }

    return (
        <div className='HB'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='form'>
                    <div className='MD'>
                    <div>
                        <h3>Task Title</h3>
                        <input
                        value={title} 
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                         type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                        <h3>Date</h3>
                        <input
                        value={date} 
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                         type='date' />
                        </div>
                        <div>
                        <h3>Asign to</h3>
                        <input
                        value={asignTo} 
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }}
                         type='text' placeholder='employee name' />
                        </div>
                        <div>
                        <h3>Category</h3>
                        <input
                        value={category} 
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                         type='text' placeholder='design, dev, etc' />
                        </div>
                    </div>
                        <div className='DD'>
                        <h3>Description</h3>
                        <textarea
                        value={description} 
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                         name='' id='' cols={"30"} rows={"10"}></textarea> 
                        <button>Create Task</button>
                        </div>
                </form>
            </div>
    )
}

export default CreateTask