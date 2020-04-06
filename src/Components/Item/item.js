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
                        <div>
                            <div className="heading-above-label">
                                <h4 className="form-heading">Item or Passage Based</h4>
                            </div>
                            <div className="pool-row-two-check-box d-flex item-checkbox-label-input">
                                <label className="container form-label flex-1">Item
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label class="container form-label flex-1">Passage
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        {/* number of Domain label and their input */}
                        <div className="d-flex mrg-top-40 justify-content-between">
                            <div className="d-flex mrg-left-40">
                                <div className="form-heading form-labels-box-large-left-side">
                                    <label >Number Of Domains</label>
                                </div>
                                <div>
                                    <input className="form-labels-box-large-right-side" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mrg-right-40">
                                <div>
                                    <select className="form-select-option form-label cursor-pointer">
                                        <option>Select Domain Name</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* number of Passengers per.... label and their input */}
                        <div className="mrg-top-10">
                            <div className="heading-above-label">
                                <h4 className="form-heading">Number Of Passages for Passage Type (For Reading)</h4>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex mrg-left-40">
                                    <div className="form-headings form-labels-box-large-left-side">
                                        <label className="form-heading">Information</label>
                                    </div>
                                    <div>
                                        <input className="form-labels-box-large-right-side" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mrg-right-40">
                                    <div className="d-flex mrg-left-40">
                                        <div className="form-headings form-labels-box-large-left-side">
                                            <label className="form-heading">Literary</label>
                                        </div>
                                        <div>
                                            <input className="form-labels-box-large-right-side" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Prior Ability Estimate checkboxes*/}
                        <div>
                            <div className="heading-above-label">
                                <h4 className="form-heading">Prior Ability Estimate</h4>
                            </div>
                            <div className="pool-row-two-check-box d-flex item-checkbox-label-input">
                                <label className="container form-label flex-1">Yes
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label class="container form-label flex-1">No
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        {/* Routing Item Set label and their input */}
                        <div className="mrg-top-10 ">
                            <div className="heading-above-label">
                                <h4 className="form-heading">Routing Item Set</h4>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex mrg-left-40">
                                    <div className="form-headings form-labels-box-large-left-side">
                                        <label className="form-heading">Number Of Items</label>
                                    </div>
                                    <div>
                                        <input className="form-labels-box-large-right-side" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mrg-right-40">
                                    <div className="d-flex mrg-left-40">
                                        <div className="form-headings form-labels-box-large-left-side">
                                            <label className="form-heading">Source File</label>
                                        </div>
                                        <div>
                                            <input className="form-labels-box-large-right-side" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Prior Ability Estimate checkboxes*/}
                        <div>
                            <div className="heading-above-label">
                                <h4 className="form-heading">Item Selection After a routing set (interim theta computation)</h4>
                            </div>
                            <div className="pool-row-two-check-box d-flex item-checkbox-label-input">
                                <label className="container form-label flex-1">Yes
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label class="container form-label flex-1">No
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