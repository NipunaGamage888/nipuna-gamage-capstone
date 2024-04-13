
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ');
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
    <div>
      <div>
        <h1>Welcome</h1>
        <p>
          Login to access all features and benefits of our Website. Manage all your
          parking in one place.
        </p>
      </div>
      <div>
        <h2>Login</h2>
        <form>
          <input
            placeholder="User Name"
            className="book-form__input"
            id="user_name"
            value={username}
            type="text"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            className="book-form__input"
            id="password"
            value={password}
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </form>
        <div>
          <button type="submit" onClick={handleLogin}> Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
