
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        user_name: "",
        telephone_num: "",
        address: "",
        password: "",
        confirm_password: "",
        vehicle_number: ""
      });
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData[e.target.name] = e.target.value;
        setFormData(updatedFormData);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios
        .post('http://localhost:8081/api/user/register', formData)
        .then((response) => {
          alert("You've successfuly been Regsitered");
          console.log('Successfully submitted:', response.data);
          navigate('/booknow');
        })
        .catch((error) => {
            if (error.response && error.response.status === 409) {
              alert(error.response.data.message);
            }else if(error.response && error.response.status === 400){
                alert('Invalid Information please Check again')
            } else{
              console.error('Error submitting form:', error);
              alert('Form submission failed. Please try again.');
            }
          });
      };
  return (
    <div>
      <div>
        <h1>Don't Have an Account</h1>
        <p>
          Register to access all features of our Website. Manage all your
          parking in one place.
        </p>
      </div>
      <div>
        <h2>SignUp</h2>
        <form>
          <input
            placeholder="Email"
            className="book-form__input"
            id="email"
            name="email"
            value={formData.email}
            type="text"
            onChange={handleChange}
          />
          <input
            placeholder="User Name"
            className="book-form__input"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            type="text"
            onChange={handleChange}
          />
          <input
            placeholder="Telephone Number"
            className="book-form__input"
            id="telephone_num"
            name="telephone_num"
            value={formData.telephone_num}
            type="text"
            onChange={handleChange}
          />
          <input
            placeholder="Address"
            className="book-form__input"
            id="address"
            name="address"
            value={formData.address}
            type="text"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            className="book-form__input"
            id="password"
            name="password"
            value={formData.password}
            type="password"
            onChange={handleChange}
          />
          <input
            placeholder="Confirm Password"
            className="book-form__input"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            type="password"
            onChange={handleChange}
          />
          <input
            placeholder="Vehicle Number"
            className="book-form__input"
            id="vehicle_number"
            name="vehicle_number"
            value={formData.vehicle_number}
            type="text"
            onChange={handleChange}
          />
        </form>
        <div>
          <button type="submit" onClick={ handleSubmit}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
