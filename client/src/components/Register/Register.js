import React,{useState} from 'react'
import PersonalInfo from "../Register/PersonalInfo/PersonalInfo"
import Other from "../Register/Other/Other"
import {Link} from "react-router-dom"
import SignUp from "../Register/SignUp/SignUp"
import "./Register.css"
const Register = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
        name:"",
        surname:"",
        username:"",
        confirmPassword: "",
        country: "",
        purpose:"",
        age:0
    })

    const handleClick = () => {
        if(currentPage === FormTitles.length - 1) {
            alert("Form submitted")
        }else{
            setCurrentPage(onPage => onPage + 1)
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputData)
    } 
    const FormTitles = ["Personal Information", "Sign-up", "Additional"] //Will be displyed as a title of sections, respectively.

    const willBeDisplayed = () => { // when currentPage is defined, this function will be executed
        if(currentPage === 0) {
            return <PersonalInfo inputData = {inputData} setInputData={setInputData}/>
        }else if(currentPage === 1){
            return <SignUp inputData = {inputData} setInputData={setInputData}/>
        }else {
            return <Other inputData = {inputData} setInputData={setInputData}/>
    }
} 
    return (
        <div className="form-main-container w-50">
            <div className="progressbar">
        <div
          style={{ width: currentPage === 0 ? "33.3%" : currentPage == 1 ? "66.6%" : "100%" }}></div>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-header">
            <h1 className="text-muted text-center mb-3">{FormTitles[currentPage]}</h1>
        </div>
            <div className="form-body">
                    {willBeDisplayed()}
            </div>
            <div className="form-footer d-flex justify-content-center align-items-center">
                <button 
                onClick={() => {setCurrentPage(onPage => onPage -1)}}
                disabled={currentPage==0}  
                className="btn btn-outline-danger mx-3 my-3">
                    Prev
                </button>
                <button type="submit"
                    className="mx-3 my-3"
                    onClick={handleClick}
                         className={currentPage === FormTitles.length - 1 ? "btn btn-outline-success" : "btn btn-outline-primary"}>
                        {currentPage === FormTitles.length - 1 ? "Sign up" : "Next"}
                </button>
            </div>
            <div className="d-flex justify-content-end mt-2">
                    <Link className="sign-link" to="/login">
                        Do you already have an account ?
                    </Link>
                    </div>
      </form>
 </div>
    )
}

export default Register;
