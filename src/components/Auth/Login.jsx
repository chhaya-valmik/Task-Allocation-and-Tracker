import React, {useState} from 'react'
import './Login.css';

const Login = ({handleLogin}) => {

  //  console.log(handleLogin)

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email, password)
      /*  console.log("email is ", email)
        console.log("password is ", password)  */

        setEmail("")
        setPassword("")
    }
    return (
        <div className='formContainer'>
            <div className='card'>
                <form className='form' onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <input 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        
                    } }
                    required className='input' type="email" placeholder='Enter your email'/>
                    <input 
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                    }}
                    required className='input' type='password' placeholder='Enter password' />
                    <button className='btn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login