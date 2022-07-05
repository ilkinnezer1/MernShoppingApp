import React from 'react'

const Other = ({inputData, setInputData}) => {
    return (
        <div className="other-info d-flex flex-column justify-content-center">
            <label className="mb-1" htmlFor="country">Where do you join us?</label>
            <input 
            required
            autoComplete="off"
            className="form-control mb-3"
            id="country"
            name="country"
            type="text"
            placeholder="type your country..."
            value={inputData.country}
            onChange={e => {
                setInputData({...inputData, country: e.target.value})
            }} /> 
            <label className="mb-1" htmlFor="purpose">Why do you join us?</label>
            <input
            required
            autoComplete="off"
             className="form-control mb-3"
             id="purpose"
             name="purpose"
             type="text"
             placeholder="type your purpose..."
             value={inputData.purpose}
             onChange={e => {
                 setInputData({...inputData, purpose: e.target.value})}}/>
            <label className="mb-1" htmlFor="purpose">How old are you?</label>
            <input
             required
             autoComplete="off"
             className="form-control"
             id="purpose"
             name="purpose"
             type="number"
             placeholder="type your purpose..."
             value={inputData.age}
             onChange={e => {
                 setInputData({...inputData, age: e.target.value})
             }}
            />
        </div>
    )
}

export default Other
