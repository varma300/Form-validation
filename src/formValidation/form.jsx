import React, {useState, useEffect } from 'react'
import './form.css'

const form = () => {
    const initialValue = {username: '',email:'', password: ''}
    const [formValue, setFormValue] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({})
    const[isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target)
        const {name,value} = e.target
    
        setFormValue({
          ...formValue,
            [name]: value
        })}

        const handleSubmit = (e) => { 
            e.preventDefault();
            setFormErrors(validate(formValue));
            setIsSubmit(true);
        } 

        useEffect(() => {
            console.log(formErrors)
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log(formValue);  
            }            
        },[formErrors]);
         
        const validate = (value) => {
            const errors = {};
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
            if(!value.username) {
                errors.username = 'Username is required';
            }
            if(!value.email) {
                errors.email = 'Email is required';
            }else if(!regex.test(value.email)) {
                errors.email = 'Email is invalid';
            }
            if(!value.password) {
                errors.password = 'Password is required';
            }else if(value.password.length < 4){
                errors.password = 'Password must be more than 4 characters';
            } else if(value.password.length > 10){
                errors.password = 'Password must be less than 10 characters';
            }


            return errors;
        };
    
  return (
    <div className='container'>

        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='ui message success'> Signed in sucsessfully</div>):(<pre>{JSON.stringify(formValue, undefined,2)}</pre>)}
        
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
                <div className="field">
                    <label>Username</label> <br/>
                    <input type="text" name="username" placeholder='user name'  value={formValue.username} onChange={handleChange}/>
                </div>
                <p>{formErrors.username}</p>
                <br/>
                <div className="field">
                    <lable>Email</lable><br/>
                    <input type="email" name="email" placeholder='email' value={formValue.email} onChange={handleChange}/>
                </div>
                <p>{formErrors.email}</p>
                <br/>
                <div className="field">
                    <lable>Password</lable><br/>
                    <input type="password" name="password" placeholder='password' value={formValue.password} onChange={handleChange}/>
                </div>
                <p>{formErrors.password}</p>
                <br/>
                <button className='fluuid ui button blue '>Submit</button>
            </div>
        </form>
    
    </div>
  )
}

export default form