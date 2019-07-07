import React from 'react'
import RoadCardImage from '../../../assets/images/Image_1-1080x675.png'
import "../../Css/Subcomponents/RoadCard.css"
import 'bootstrap'

const roadCard = (props) => {
    // return(
    //     <div dir={"rtl"} className="container road-card-container">
    //         <div className="row">
    //             <div className="col-5">
    //                 <label className="road-card-label">نام محور:</label>
    //             </div>
    //             <div className="col-7">
    //                 <h5>{props.way}</h5>
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col-5">
    //                 <label className="road-card-label">نام استان:</label>
    //             </div>
    //             <div className="col-7">
    //                 <h5>{props.province}</h5>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="container road-card-container bg-light-green grow shadow-5 tc dib ma2 br3">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div dir={"rtl"} className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <img className="card-img-top"
                                             src={RoadCardImage}
                                             alt="Card cap"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="road-card-label">کد مسیر:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="road-card-label">{props.road_id}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="road-card-label">نام محور:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="road-card-label">{props.way}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="road-card-label">نام استان:</label>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="road-card-label">{props.province}</h5>
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

export default roadCard;