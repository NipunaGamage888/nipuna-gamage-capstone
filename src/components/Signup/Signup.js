
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.scss'

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
      const [formDataBusiness, setFormDataBusiness]=useState({
        parking_name:"",
        parking_spaces:"",
        latitude:"",
        longitude:"",
        inspection_date:'',
        address:'',
        contact_num:'',
        email:''
      })
      const [registrationType, setRegistrationType] = useState("user");
      const navigate = useNavigate()
    
      const inspectionTimeDate = new Date(formDataBusiness.inspection_date + ":00");
      const convertedTime = inspectionTimeDate.toISOString().slice(0, 19);
      console.log(formDataBusiness)
      
   
      const handleChange = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData[e.target.name] = e.target.value;
        setFormData(updatedFormData);
      };
    
      const handleChangeBusiness = (e) => {
        const updatedFormData = { ...formDataBusiness };
        updatedFormData[e.target.name] = e.target.value;
        setFormDataBusiness(updatedFormData);
      };

      const handleSubmitBusiness=(e)=>{
        e.preventDefault();
        console.log(formData);
        axios
        .post('http://localhost:8081/api/parking/new/register', formDataBusiness)
        .then((response) => {
          alert("You've successfuly been Regsitered");
          console.log('Successfully submitted:', response.data);
          navigate('/');
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
      }
    
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
      const handleUserRegistration = () => {
        setRegistrationType("user");
    };

    const handleBusinessRegistration = () => {
        setRegistrationType("business");
    };
  return (
    <div className="signup">
      <div className="signup__intro">
        <h1 className="signup__intro-heading">Don't Have an Account</h1>
        <p className="signup__intro-para">
          Register to access all features of our Website. Manage all your
          parking in one place.
        </p>
      </div>
      <div className="signup__form-sec">
        <h2 className="signup__form-sec-heading"> SignUp</h2>
        
                <div className="signup__toggle">
                    <button
                        className={`signup__button-toggle ${registrationType === "user" ? "active" : ""}`}
                        onClick={handleUserRegistration}
                    >
                        User
                    </button>
                    <button
                        className={`signup__button-toggle ${registrationType === "business" ? "active" : ""}`}
                        onClick={handleBusinessRegistration}
                    >
                        Business
                    </button>
                </div>
                {registrationType === "user" && (
                    <form className="signup__form">
                        {/* User registration fields */}
                        <input
                            placeholder="Email"
                            className="signup__input"
                            id="email"
                            name="email"
                            value={formData.email}
                            type="text"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="User Name"
                            className="signup__input"
                            id="user_name"
                            name="user_name"
                            value={formData.user_name}
                            type="text"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Telephone Number"
                            className="signup__input"
                            id="telephone_num"
                            name="telephone_num"
                            value={formData.telephone_num}
                            type="text"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Address"
                            className="signup__input"
                            id="address"
                            name="address"
                            value={formData.address}
                            type="text"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Password"
                            className="signup__input"
                            id="password"
                            name="password"
                            value={formData.password}
                            type="password"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Confirm Password"
                            className="signup__input"
                            id="confirm_password"
                            name="confirm_password"
                            value={formData.confirm_password}
                            type="password"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Vehicle Number"
                            className="signup__input"
                            id="vehicle_number"
                            name="vehicle_number"
                            value={formData.vehicle_number}
                            type="text"
                            onChange={handleChange}
                        />
                        <button className="signup__button" type="submit" onClick={handleSubmit}>Register</button>
                    </form>
                )}
                {registrationType === "business" && (
                    <form className="signup__form">
                   
                    <input
                        placeholder="Parking Name"
                        className="signup__input"
                        id="parking_name"
                        name="parking_name"
                        value={formDataBusiness.parking_name}
                        type="text"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="parking Spaces"
                        className="signup__input"
                        id="parking_spaces"
                        name="parking_spaces"
                        value={formDataBusiness.parking_spaces}
                        type="text"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="Latitude"
                        className="signup__input"
                        id="latitude"
                        name="latitude"
                        value={formDataBusiness.latitude}
                        type="number" 
                        step="0.000000000000000000000001"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="longitude"
                        className="signup__input"
                        id="longitude"
                        name="longitude"
                        value={formDataBusiness.longitude}
                        type="number" 
                        step="0.000000000000000000000001"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="Password"
                        className="signup__input"
                        id="inspection_date"
                        name="inspection_date"
                        value={convertedTime}
                        type="datetime-local"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="address Password"
                        className="signup__input"
                        id="address"
                        name="address"
                        value={formDataBusiness.address}
                        type="text"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="Contact Number"
                        className="signup__input"
                        id="contact_num"
                        name="contact_num"
                        value={formDataBusiness.contact_num}
                        type="text"
                        onChange={handleChangeBusiness}
                    />
                    <input
                        placeholder="Email"
                        className="signup__input"
                        id="email"
                        name="email"
                        value={formDataBusiness.email}
                        type="text"
                        onChange={handleChangeBusiness}
                    />
                    <button className="signup__button" type="submit" onClick={handleSubmitBusiness}>Register</button>
                </form>
                )}
      </div>
    </div>
  );
}

export default Signup;
