import React, {Component} from 'react'
import CreateRoadCameraSearch from '../SubComponents/CreateRoadCameraSearch'
import CameraCard from '../SubComponents/CameraCard'
import {CREATE_CAMERA_URL, GET_CAMERA_URL} from '../../../Constants/Apis/ApiAddresses'
import '../../Css/Maincomponents/Query.css'
import '../../Css/Maincomponents/WorkingWithCamera.css'
import {CAMERA_CREATE_SUCCESSFULLY_TEXT} from "../../../Constants/Text/TextConstants";


class WorkingWithCamera extends Component {

    state = {
        cameras: [],
        road_id: -1,
        province: ""
    };

    goToUpdateCameraPageClick = (id) => {
        console.log(id);
    };

    onSearchBarChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    createCameraOnClick = () => {
        if (this.camera_id.value === "" || this.longitude.value === ""
            || this.latitude === "" || this.sequence === "") {
            alert("لطفا مقادیر خواسته شده را وارد نمایید")
        } else {
            let province = this.state.province;
            let road_id = this.state.road_id;
            let cam_id = this.camera_id.value;
            let sequence = this.sequence.value;
            let longitude = this.longitude.value;
            let latitude = this.latitude.value;
            let data = new FormData();
            console.log("amir");
            console.log(province, road_id);
            data.append('roadID', road_id);
            data.append('cam_id', cam_id);
            data.append('province', province);
            data.append('sequence', sequence);
            data.append('longitude', longitude);
            data.append('latitude', latitude);
            console.log(data);
            this.handleQuery(data)
        }
    };


    handleQuery = (data) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', CREATE_CAMERA_URL, true);
        xhr.onload = () => {
            // do something to response
            let object = JSON.parse(xhr.responseText);
            console.log(object["road_id"]);
            if (xhr.responseText === CAMERA_CREATE_SUCCESSFULLY_TEXT) {
                console.log("aaaaa");
                this.componentDidMount()
            } else {
                // console.log(object["road_id"]);
            }
        };
        xhr.send(data);
    };

    render() {
        let filteredCamera = [...this.state.cameras];
        // filteredCamera = filteredCamera.filter((way) => {
        //     let way_name = way["source"] + "-" + way["destination"];
        //     return way_name.toLowerCase().includes(this.state.searchField);
        // });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 col-md-3">

                    </div>
                    <div className="col-sm-10 col-md-6">
                        <CreateRoadCameraSearch
                            onSearchBarChange={this.onSearchBarChange}/>
                    </div>
                    <div className="col-sm-1 col-md-3">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1 col-md-3">

                    </div>
                    <div className="col-sm-10 col-md-6">
                        <button className='query-button'
                                data-toggle="modal"
                                data-target="#camera-creator-modal">
                            ایجاد دوربین
                        </button>
                    </div>
                    <div className="col-sm-1 col-md-3">

                    </div>
                </div>
                <div className="row">
                    {(filteredCamera.length === 0) ? null :
                        <div className="col-12 align-cards-center">
                            {
                                filteredCamera.map((el) => {
                                    return (
                                        <CameraCard
                                            cam_id={el["cam_id"]}
                                            province={el["province"]}
                                            sequence={el["sequence"]}
                                            longitude={el["longitude"]}
                                            latitude={el["latitude"]}
                                            goToCameraPageClick={() => this.goToUpdateCameraPageClick(el["cam_id"])}/>
                                    )
                                })
                            }
                        </div>
                    }
                </div>


                {/*Modal*/}
                <div className="modal fade" id="camera-creator-modal" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-1">
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="col-11">
                                            <h5 dir={'rtl'} className="modal-title camera-creator-modal-title"
                                                id="exampleModalLabel">
                                                افزودن دوربین جدید
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="modal-body">
                                        <div className="row camera-creator-modal-body">
                                            <div className="col">
                                            </div>
                                            <div className="col-9">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="camera-creator-form-label"
                                                                       htmlFor="camera-creator-form-road-id">
                                                                    کد دوربین:
                                                                </label>
                                                                <input type="text"
                                                                       className="form-control camera-creator-form-input"
                                                                       id="camera-creator-form-rad-id"
                                                                       ref={node => {
                                                                           this.camera_id = node
                                                                       }}
                                                                       placeholder="کد دوربین"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="camera-creator-form-label"
                                                                    htmlFor="camera-creator-form-province">
                                                                    مرتبه:
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control camera-creator-form-select"
                                                                    id="camera-creator-form-sequence"
                                                                    ref={node => {
                                                                        this.sequence = node
                                                                    }}
                                                                    placeholder={"مرتبه"}>
                                                                </input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="camera-creator-form-label"
                                                                       htmlFor="camera-creator-form-source">
                                                                    طول جغرافیایی:
                                                                </label>
                                                                <input type="text"
                                                                       className="form-control camera-creator-form-input"
                                                                       id="camera-creator-form-source"
                                                                       ref={node => {
                                                                           this.longitude = node
                                                                       }}
                                                                       placeholder="طول جغرافیایی"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="camera-creator-form-label"
                                                                    htmlFor="camera-creator-form-destination">
                                                                    عرض جغرافیایی:
                                                                </label>
                                                                <input type="text"
                                                                       className="form-control camera-creator-form-input"
                                                                       id="camera-creator-form-destination"
                                                                       ref={node => {
                                                                           this.latitude = node
                                                                       }}
                                                                       placeholder="عرض جغرافیایی"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="modal-footer camera-creator-modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">خروج
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.createCameraOnClick}>ثبت
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props.location.state.detail === undefined);
        let roadID = this.props.location.state.road_id;
        let province = this.props.location.state.province;
        console.log(roadID, province);
        this.setState({
            road_id: roadID,
            province: province
        });
        let formData = new FormData();
        formData.append("roadID", roadID);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", GET_CAMERA_URL, true);
        xhr.onload = () => {
            console.log(xhr.responseText);
            this.setState({cameras: JSON.parse(xhr.responseText)})
        };
        xhr.send(formData)
    }
}

export default WorkingWithCamera;