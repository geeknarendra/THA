import React from 'react'
import useField from './Form';
import './App.css'

export default function Form() {
    const {utype,uname,u_onchange,ureset} = useField('email');
    const password = useField('password');

  
    return (
        <div className="container" >

          <form className="form">
            
            <label htmlFor="username">Email</label><br />
            <input type={utype} value={uname} onChange={u_onchange} id="username"/>
            <br></br>
            
            <label htmlFor="password">Password</label> <br />
            <input type={password.type} value={password.value} onChange={password.onChange} id="password"/>
          <br/>
            <input type="button" value="Login"/>
          </form>
        </div>
    )
}