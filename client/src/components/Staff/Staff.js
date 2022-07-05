import React from 'react'
import "./Staff.css"
import { staff } from '../../Utils/staff'

const Staff = () => {
    return (
        <div className="staff-container d-flex justify-content-center align-items-center">
            <div className="header-container text-center">
                <h1> Our Team</h1>
                <p>
                Discover the best collection for autumn 
                of Stylist Art. With so charming,
                 modern and passionate you certainly love
                this collection.
                </p>
                <div className="staff-list-container">
                    <div className="staff-list d-flex">
                        {staff.map(st => (
                        <div className="card m-2" style={{width: "18rem"}}>
                        <img className="card-img-top" src={st.img} alt="Card image cap" />
                        <div className="card-body text-center">
                         <h5 className="card-text">{st.name}</h5>
                         <h5 className="card-text text-muted">{st.position}</h5>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff
