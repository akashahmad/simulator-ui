import React from 'react'
import './style.css'

export default () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center main-div-of-item background-color-of-form">
                <div className="form-div-for-width">
                    {/* header of pool , result , score , item */}
                    <div className="header-of-form-main-div">
                    </div>
                    <form>
                        {/* item or passage based */}
                        {/* subject radio buttons and Item pool label and their input */}
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <div className="heading-above-label">
                                    <h4 className="form-heading">Subject</h4>
                                </div>
                                <div className="pool-row-two-check-box d-flex item-checkbox-label-input">
                                    {/* first radio button of Reading */}
                                    <label className="container form-label flex-1">Reading
                                    <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    {/* seconf radio btn of Math */}
                                    <label class="container form-label flex-1">Math
                                    <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center item-pool-select-option  mrg-right-40">
                                <div className="mrg-top-14">
                                    <h4 className="form-heading">Item Pool</h4>
                                </div>
                                <div>
                                    <select className="form-select-option form-label cursor-pointer">
                                        <option>itempool_math_01_2019</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Grade label and Number of Examinies their input */}
                        <div className="d-flex mrg-top-40 justify-content-between">
                            <div className="d-flex mrg-left-40">
                                <div className="form-heading form-labels-box-large-left-side">
                                    <label>Grade</label>
                                </div>
                                {/* grade select option */}
                                <div>
                                    <select className="form-labels-box-large-right-side form-label select-input-pool" >
                                        <option>G5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mrg-right-40">
                                <div className="form-heading form-labels-box-large-left-side">
                                    <label>Number of Examinies</label>
                                </div>
                                {/* Number of Examination input */}
                                <div>
                                    <input className="form-labels-box-large-right-side form-label " />
                                </div>
                            </div>
                        </div>
                        {/* Theta Ranges Theta increment inputs and label*/}
                        <div>

                        </div>
                        {/* radio buttons of theta Distribution */}
                        <div className="mrg-top-10">
                            <div className="heading-above-label">
                                <h4 className="form-heading">Theta Distribution</h4>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="mrg-left-40">
                                    <div>
                                        {/* first radio btn */}
                                        <label className="container form-label flex-1">Normal
                                            <input type="radio" checked="checked" name="radio" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="radio-btn-of-theta-label justify-content-start d-flex">
                                    <div>
                                        {/* second radio btn */}
                                        <label class="container form-label flex-1">Uniform
                                            <input type="radio" checked="checked" name="radio" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Generate Replication Data sets and Item Pool Characteristicslabel and their input */}
                        <div className="mrg-top-10">
                            <div className="heading-above-label">
                                <h4 className="form-heading">Generate Replication Data sets</h4>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex mrg-left-40">
                                    {/* Generate Replication Data sets label and input */}
                                    <div className="form-headings form-labels-box-large-left-side">
                                        <label className="form-heading">Number Of Replications</label>
                                    </div>
                                    <div>
                                        <input className="form-labels-box-large-right-side" />
                                    </div>
                                </div>
                                <div className=" mrg-right-40">
                                    <div className="item-pool-label-input">
                                        <h4 className="form-heading">Item Pool Characteristics</h4>
                                    </div>
                                    {/* Item Pool Characteristics label and input */}
                                    <div className="d-flex">
                                        <div className="form-headings form-labels-box-large-left-side">
                                            <label className="form-heading">Number Of Items in Pool</label>
                                        </div>
                                        <div>
                                            <input className="form-labels-box-large-right-side" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* IRT Model radio btns*/}
                        <div>
                            <div className="heading-above-label">
                                <h4 className="form-heading">IRT Model</h4>
                            </div>
                            <div className="pool-row-two-check-box d-flex item-checkbox-label-input">
                                <label className="container form-label flex-1">Rasch/1 PL
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label class="container form-label flex-1">2 PL
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label class="container form-label flex-1">3 PL
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        {/* forms button  */}
                        <div className="mrg-top-40 btn-main-div">
                            <div className="d-flex justify-content-center btn-blue-green-padding">
                                <button className="cursor-pointer btn-common btn-green">Back</button>
                                <button className="cursor-pointer btn-common btn-blue mrg-left-20">Next</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}