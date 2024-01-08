import React from 'react'
import { useState } from 'react'

function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
      })

    const handleChange = (event) => {
        const { username, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [username]: value,
        }));
      }; 

      const handleSubmit = (event) => {
        event.preventDefault();
        
        setData({
          username:'',
          password:'',
        })
      }


  return (
    <div className='loginContainer'>
      <form action="POST" onSubmit={handleSubmit}>

      <div className="loginTopic">
          <span className="topic">Login</span>
      </div>
      <div className="loginBox">
        <div className="inputs">
          <div className="inputItem">
            <span className="inputUserName">User Name</span>
            <input type="text" className="input" name='username' value={data.name} onChange={handleChange}/>
          </div>
          <div className="inputItem">
            <span className="inputPassword">Password</span>
            <input type="password" className="input" name='password' value={data.password} onChange={handleChange}/>
          </div>
        </div>
        <div className="signInButton">
          <button type='submit' value="submit">submit</button>
        </div>
    </div>
      </form>
  </div>
  )
}

export default Login
