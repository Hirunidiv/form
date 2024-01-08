import React from 'react'
import {useState} from 'react'

export default function Form() {

  const [data, setData] = useState({
    name: '',
    password: '',
    gender: '',
    contactNumber: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setData({
      name:'',
      password:'',
      gender:'',
      contactNumber:'',
    })
  }
      
  return (
    <div className='FormContainer'>
      <form action="POST" onSubmit={handleSubmit}>

      <div className="formTopic">
          <span className="topic">Sign Up</span>
      </div>
      <div className="formBox">
        <div className="inputs">
          <div className="inputItem">
            <span className="inputName">Name</span>
            <input type="text" className="input" name='name' value={data.name} onChange={handleChange}/>
          </div>
          <div className="inputItem">
            <span className="inputPassword">Password</span>
            <input type="password" className="input" name='password' value={data.password} onChange={handleChange}/>
          </div>
          <div className="inputItem">
            <span className="inputGender">Gender</span>
            female<input type="radio" className="input" name='gender' value="female"
            checked={data.gender === 'female'} onChange={handleChange}/>
            male<input type="radio" className="input" name='gender' value="male" 
            checked={data.gender==='male'} onChange={handleChange}/>
          </div>
          <div className="inputItem">
            <span className="inputContactNumber">Contact Number</span>
            <input type="text" className="input" name='contactNumber' value={data.contactNumber} onChange={handleChange}/>
          </div>  
        </div>
        <div className="signInButton">
          <button type='submit' value="submit">SIGN IN</button>
        </div>
    </div>
      </form>
    
    
    
  </div>
  )
}
