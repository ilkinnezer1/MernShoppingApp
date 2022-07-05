import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./PageLogin.css"

const Login = () => {


    const [formData, setFormData] = useState({
        username:"",
        password:""
    })

    const handleSubmit = e => {
        alert(formData.email, formData.password)
    }
    const handleReset = () => {
        setFormData("")
    }
    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-container w-50 d-flex flex-column ">
                <h2 className="text-muted text-center mb-4">Login</h2>
                <form className="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="mb-1">Username</label>
                     <input 
                    type="text"
                    id="username"
                    required
                    autoComplete="off"
                    className="form-control mb-3"
                    value={formData.username}
                    placeholder="type your username"
                    onChange={(e) => setFormData({...formData, username:e.target.value })}/>
                     <label htmlFor="email" className="mb-1">Password</label>
                     <input 
                    type="password"
                    required
                    autoComplete="off"
                    className="form-control mb-3"
                    value={formData.password}
                    placeholder="type your password"
                    onChange={(e) => setFormData({...formData, password:e.target.value })}/>
                    <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-outline-success mx-2" >Sign in</button>
                    <button onClick={handleReset} type="reset" className="btn btn-outline-danger mx-1" >Reset</button>
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                    <Link className="sign-link" to="/register">
                        Don't you have any account ?
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
