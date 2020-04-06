import React from 'react'
import './style.css'
import HeaderImage from '../../Assets/Images/bitmap.png'

export default () => {
    return (
        <div className="container-fluid">
            <div className="Signin-main-div">
                <form className="d-flex justify-content-center">
                    <div className="inside-form d-flex">
                        {/* left-side-image */}
                        <div className="left-side-form-img">
                            <div className="logo d-flex justify-content-center align-items-center">
                                <img src={HeaderImage} alt="logo" />
                            </div>
                        </div>
                        {/* right side of input fields and heading */}
                        <div className="right-side-main-div">
                            {/* heading */}
                            <div className="right-side-heading d-flex justify-content-center align-items-center">
                                <h4 className="text-align-center">Adaptive Simulator Login</h4>
                            </div>
                            {/* input fields of UserName*/}
                            <div className="d-flex justify-content-center  align-items-center flex-column">
                                <div className="label-main-dev">
                                    <label>User Name</label>
                                </div>
                                <div className="signin-input-field">
                                    <input placeholder="" />
                                </div>
                            </div>
                            {/* input fields of Password*/}
                            <div className="d-flex justify-content-center input-field-password-main-div align-items-center flex-column">
                                <div className="label-main-dev">
                                    <label>Password</label>
                                </div>
                                <div className="signin-input-field">
                                    <input placeholder="" />
                                </div>
                            </div>
                            {/* button */}
                            <div className="d-flex justify-content-center align-items-center mrg-top-40">
                                <button className="btn-common btn-blue">Login</button>
                            </div>
                            {/* forgot Password */}
                            <div className="d-flex forgot-password justify-content-center align-items-center mrg-top-10">
                                <h6>Forgot Password</h6>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}