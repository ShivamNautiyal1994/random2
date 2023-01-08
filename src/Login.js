import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    const [{}, dispatch]=useStateValue();
    const signIn=()=>{
     auth.signInWithPopup(provider)
     .then((result)=>{
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
     })
     .catch((error)=>alert(error.message));
     }
     
    
  return (
    
      <div className="login">
        <div className="login_container">
            <img src="https://i.pinimg.com/originals/63/5e/bc/635ebca9e4cefa7be085b506811196d4.png" alt="" />
            <div className="login_text">
                <h1>Sign in to whatsapp</h1>
            </div>
            <Button  onClick={signIn}>Sign in with google</Button>
        </div>
        
      </div>
    
  )
}

export default Login
