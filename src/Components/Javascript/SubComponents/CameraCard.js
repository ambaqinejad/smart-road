import React from 'react'
import CameraCardImage from '../../../assets/images/Image_1-1080x675.png'
import "../../Css/Subcomponents/Card.css"
import 'bootstrap'

const cameraCard = (props) => {
    return (
        <div className="container camera-card-container bg-light-green grow shadow-5 tc dib ma2 br3">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div dir={"rtl"} className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <img className="card-img-top"
                                             src={CameraCardImage}
                                             alt="Card cap"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="camera-card-label">کد دوربین:</label>
                                    </div>
                                    <div className="col-8 cam-id-to-english-number">
                                        <h5 className="camera-card-label">{props.cam_id}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="camera-card-label">استان:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="camera-card-label">{props.province}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="camera-card-label">مرتبه:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="camera-card-label">{props.sequence}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="camera-card-label">طول جغرافیایی:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="camera-card-label">{props.longitude}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="camera-card-label">عرض جغرافیایی:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="camera-card-label">{props.latitude}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <button
                                            className="card-button"
                                            onClick={props.goToUpdateCameraPageClick}>
                                            بروزرسانی دوربین
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default cameraCard;