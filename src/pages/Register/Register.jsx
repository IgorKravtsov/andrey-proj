import React, {useState} from 'react'
import { NewApi } from '../../api/new api/new-api'
import { Link, useNavigate } from "react-router-dom"
import "./style.scss"

  const Register = () => {
    const navigate = useNavigate();
  
    const [state, setState] = useState({
      email: "",
      password: "",
      repeatPasswd: ""
    });
  
    const  handleSubmit = async (e) => {
      e.preventDefault();
      const {email, password} = state;
      const data = await NewApi.Register(email,password);
      localStorage.setItem('user',data.token);
      navigate('/people-page', {replace: true});
    };
  
    const handleOnChange = (e) => {
      const item = e.target.name;
      setState({
        ...state,
        [item]: e.target.value
      });
    };
  return (
    <>
      <div className='div1'>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit} className="register">
        <input name="email" value={state.email} onChange={handleOnChange} type="email" className="regName" placeholder="Enter your email" />
        <input name="password" value={state.password} onChange={handleOnChange} type="password" className="passwdReg" placeholder="Enter your password" />
        <input name="repeatPasswd" value={state.repeatPasswd} onChange={handleOnChange} type="password" className="confirmReg" placeholder="Confirm your password" />
        <button type="submit" className="submBttn">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Register