
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.scss'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
      const navigate = useNavigate()
    
    
      const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:8081/api/user/login', { username, password });
          localStorage.setItem('token', response.data.token);
          navigate('/booknow');
          
        } catch (error) {
            if(error.response && error.response.status === 401){
                alert('Incorrect User Name or password please try again')
            }else{
                console.error('Error submitting form:', error);
                alert('Form submission failed. Please try again.');
              }
        }
      };
  return (
    <div className="login">
      <div className="login__intro">
        <h1 className="login__intro-heading">Welcome</h1>
        <p className="login__intro-para">
          Login to access all features and benefits of our Website. Manage all your
          parking in one place.
        </p>
      </div>
      <div className="login__form-sec">
        <h2 className="login__form-sec-heading">Login</h2>
        <form className="login__form">
          <input
            placeholder="User Name"
            className="login__input"
            id="user_name"
            value={username}
            type="text"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            className="login__input"
            id="password"
            value={password}
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </form>
        <div>
          <button className="login__button" type="submit" onClick={handleLogin}> Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
