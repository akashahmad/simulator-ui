import React from 'react'
import './style.css'
export default () => {
    return (
        <div className="containerfluid pool-page-container ">
            <div className="pool-row-one d-flex justify-content-around">
                <div className="width-555">
                    <h1 className="form-heading">Subject</h1>
                </div>
                <div className="width-555">
                    <h1 className="form-heading">Item Pool</h1>
                </div>
            </div>
            <div className="pool-row-two d-flex justify-content-around">
                <div className="pool-row-two-check-box d-flex width-555">
                    <label className="container form-heading flex-1">Reading
                        <input type="radio" checked="checked" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <label class="container form-heading flex-1">Math
                        <input type="radio" checked="checked" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="pool-row-two-check-input width-555">
                    <h1 className="form-heading">Item Pool</h1>
                </div>
            </div>
            <div className="d-flex pool-row-three justify-content-around">
                <div className="d-flex">
                    <label className="form-labels-box-large-left-side">
                        <h1 className="form-heading">Grade</h1>
                    </label>
                    <input className="form-labels-box-large-right-side">

                    </input>
                </div>
                <div className="d-flex">
                    <label className="form-labels-box-large-left-side">
                        <h1 className="form-heading">Number of examinees</h1>
                    </label>
                    <input className="form-labels-box-large-right-side">

                    </input>
                </div>
            </div>
            <div className="pool-row-four d-flex justify-content-around">
                <div className="row-four-one width-555">
                    <h1 className="form-heading">Theta Distribution</h1>
                </div>
                <div className="row-four-two width-555 ">
                    <h1 className="form-heading"></h1>
                </div>
            </div>
            <div className="pool-row-five d-flex justify-content-around">
                <div className="pool-row-five-check-box width-555">
                    <label className="container form-heading">Normal
                        <input type="radio" checked="checked" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="pool-row-five-check-input width-555">
                    <label className="container form-heading">Uniform
                        <input type="radio" checked="checked" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
         <div className="pool-row-six d-flex justify-content-around">
         <div className="d-flex width-555 justify-content-between">
             <div className="d-flex ">
                    <div className="form-labels-box-small-left-side">
                        Grade
                    </div>
                    <input className="form-labels-box-small-right-side">

                    </input>
                    </div>
                    <div className="d-flex">
                    <div className="form-labels-box-small-left-side">
                       Grade
                    </div>
                    <input className="form-labels-box-small-right-side">
                    </input>
                    </div>
                </div>
                <div className="d-flex justify-content-between width-555">
                    <div>
                    <label className="form-labels-box-small-left-side">
                        <h1 className="form-heading">Number of examinees</h1>
                    </label>
                    <input className="form-labels-box-small-right-side">

                    </input>
                    </div>
                    <div>
                    <label className="form-labels-box-small-left-side">
                        <h1 className="form-heading">Number of examinees</h1>
                    </label>
                    <input className="form-labels-box-small-right-side">

                    </input>
                    </div>
                </div>
         </div>
        </div>
    )
}