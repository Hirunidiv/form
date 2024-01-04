import React from 'react'

export default function Form() {
  return (
    <div className='FormContainer'>
    <div className="formTopic">
          <span className="topic">Sign Up</span>
        </div>
    <div className="formBox">
        <div className="inputs">
          <div className="inputItem">
            <span className="inputName">Name</span>
            <input type="text" className="input" />
          </div>
          <div className="inputItem">
            <span className="inputAge">Password</span>
            <input type="password" className="input" />
          </div>
          <div className="inputItem">
            <span className="inputPassword">Geneder</span>
            female<input type="radio" className="input" name='gender' value="female"/>
            male<input type="radio" className="input" name='gender' value="male" />
          </div>
          <div className="inputItem">
            <span className="inputAddress">Contact Number</span>
            <input type="text" className="input" />
          </div>  
        </div>
        <div className="signInButton">
          <button type='submit' value="submit">SIGN IN</button>
        </div>
    </div>
    
  </div>
  )
}
