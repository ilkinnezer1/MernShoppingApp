import React from 'react'
import "../Register.css"

const PersonalInfo = ({inputData, setInputData}) => {
    return (
        <div className="personal-info d-flex flex-column">
            <label className="mb-1" htmlFor="username">New Username</label>
            <input 
            required
            autoComplete="off"
            id="username"
            name="username"
            type="text"
            className="form-control mb-3"
            placeholder="type your username..."
            value={inputData.username}
            onChange={e => {
                setInputData({...inputData, username: e.target.value})
            }}/>
            <label className="mb-1" htmlFor="name" >Your name</label>
            <input 
            required
            autoComplete="off"
            id="name"
            name="name"
            type="text"
            className="form-control mb-3"
            placeholder="type your name..."
            value={inputData.name}
            onChange={e => {
                setInputData({...inputData, name: e.target.value})
            }}/>
            <label className="mb-1" htmlFor="surname">Your surname</label>
            <input
            required
            autoComplete="off"
            id="surname"
            name="surname"
            type="text"
            className="form-control"
            placeholder="type your surname..."
            value={inputData.surname}
            onChange={e => {
               setInputData({...inputData,  surname:e.target.value})     
            }}/>
        </div>
    )
}

export default PersonalInfo;
