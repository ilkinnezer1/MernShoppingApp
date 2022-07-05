import React from 'react'
import "../Register.css"

const SignUp = ({inputData, setInputData}) => {
    return (
        <div className="sign-up-info">
            <label className="mb-1" htmlFor="email">Email Address</label>
            <input
            required
            autoComplete="off"
            type="text"
            id="email"
            name="email"
            placeholder="type your email..."
            className="form-control mb-3"
            value={inputData.email}
            onChange={e => {
                setInputData({...inputData, email: e.target.value})
            }} 
            />
             <label className="mb-1" htmlFor="password">Password</label>
            <input
            required
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            placeholder="type your password..."
            className="form-control mb-3"
            value={inputData.password}
            onChange={e => {
                setInputData({...inputData, password: e.target.value})
            }}
            />
             <label className="mb-1" htmlFor="confirmPassword">Confirm password</label>
            <input
            required
            autoComplete="off"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            placeholder="confirm your password..."
            value={inputData.confirmPassword}
            onChange={e => setInputData({...inputData, confirmPassword:e.target.value})}
            />
        </div>
    )
}

export default SignUp
