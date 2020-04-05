import React from 'react'
import './style.css'
import PlusImage from '../../Assets/Images/group-4.png' 
import SelectImage from '../../Assets/Images/group-3.png'

export default () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center main-div-simulation">
                <div className="simulation-box">
                    {/* heading of Start Simulation */}
                    <div className="d-flex justify-content-center align-items-center start-Simulation-heading">
                        <h1>Start New Simulation</h1>
                    </div>
                    {/* new administrator or second administrator buttons */}
                    <div className="d-flex justify-content-center main-btn-div">
                        <span className="plus-img">
                            <img src={PlusImage} alt="New Administrator"/>
                            <h4>New Administrator</h4>
                        </span>
                        <span className="plus-img mrg-left-10">
                            <img src={SelectImage} alt="New Administrator"/>
                            <h4>New Administrator</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}