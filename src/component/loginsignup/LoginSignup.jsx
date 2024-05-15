import React, { useState } from 'react'
import './LoginSignup.css'
import email from '../../assets/email.png'
import user from '../../assets/person.png'
import password from '../../assets/password.png'

const LoginSignup = () => {
     
    const[action,setaction]=useState("Sign Up")
   
    

  return (<>
    <div className="container block glow">
        <div className="header">
            <div className="signup">{action}</div>
            <hr/>
        </div>
        <div className="inputs">
            {action==="Sign Up"?<div className="input">
                <img src={user} alt="" className="email" />
                <input type='text' placeholder='Name'/>
            </div>:<div></div>}
            <div className="input">
                <img src={email} alt="" className="email" />
                <input type='text' placeholder='Email id'/>
            </div>
            <div className="input">
                <img src={password} alt="" className="email" />
                <input type='text' placeholder='Password'/>
            </div>
        </div>
        {action==="Sign In"?<div className="lost-pass">Forget Password?<span>click here</span></div>:<div></div>}
        <div className="submit-container">
            <div onClick={()=>setaction("Sign Up")} className={action=="Sign Up"?"submit gray":"submit"}>Sign Up</div>
            <div onClick={()=>setaction("Sign In")} className={action=="Sign In"?"submit gray":"submit"}>Login</div>
        </div>
    </div>
  </>)
}

export default LoginSignup
