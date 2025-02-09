import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world!</h6>
            </div>
        </div>
        <Login />

    </div>
  )
}

function SignUp(){
    return (
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName'/>
                </div>
                <div>
                    <input type="text" placeholder='User Name' className='infoInput' name='userName'/>
                </div>
                <div>
                    <input type="text" placeholder="Password" className='infoInput' name='password'/>
                    <input type="text" placeholder="Confirm Password" className='infoInput' name='confirm_password'/>
                </div>

                <div>
                    <span style={{fontSize:"12px"}}>Already have an account. LOGIN!</span>
                </div>
                <button className="button infoButton" type='submit'>
                    SignUp
                </button>
            </form>
        </div>
    )
}

function Login(){
    return (
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Login</h3>
                <div>
                    <input
                    type="text"
                    placeholder="Username"
                    className="infoInput"
                    name="username"
                    />
                </div>
        
                <div>
                    <input
                    type="password"
                    className="infoInput"
                    placeholder="Password"
                    name="password"
                    />
                </div>

                <div>
                    <span style={{fontSize:"12px"}}>Don't have an account SIGN UP!</span>
                    <button className="button infoButton" type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Auth