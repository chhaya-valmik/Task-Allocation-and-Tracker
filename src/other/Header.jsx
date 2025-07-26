import React from 'react'
import './Header.css'
import { setLocalStorage } from '../utils/localStorage'

const Header = (props) => {

    const logOutUser = () =>{
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
      //  window.location.reload()
    }


    return (
        <div className='header'>
            <h1 className='heading'>Hello <br/> <span className='span'></span></h1>
            <button onClick={logOutUser} className='btn'>Log out</button>
        </div>
    )
}

export default Header
