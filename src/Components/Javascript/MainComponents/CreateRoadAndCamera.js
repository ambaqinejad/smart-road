import React, {Component} from 'react';
import RoadCard from '../SubComponents/RoadCard'
import CreateRoadCameraSearch from '../SubComponents/CreateRoadCameraSearch'
import '../../Css/Maincomponents/CreateRoadAndCameras.css'
import '../../Css/Maincomponents/Query.css'
import {province} from "../../../Constants/Jsons/JsonFiles";
import {CREATE_ROAD_URL} from "../../../Constants/Apis/ApiAddresses";
import {ROAD_CREATE_SUCCESSFULLY_TEXT} from "../../../Constants/Text/TextConstants";


class CreateRoadAndCamera extends Component {

    state = {
        roads: [],
        searchField: "",
        justForReRender: true
    };


    createRoadOnClick = () => {
        if (this.road_id.value === ""
            || this.source.value === "" || this.destination === "") {
            alert("لطفا مقادیر خواسته شده را وارد نمایید")
        } else {
            let province = this.province.value;
            let road_id = this.road_id.value;
            let source = this.source.value;
            let destination = this.destination.value;
            let data = new FormData();
            data.append('road_id', road_id);
            data.append('province', province);
            data.append('source', source);
            data.append('destination', destination);
            console.log(data);
            this.handleQuery(data)
        }


    };


    handleQuery = (data) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', CREATE_ROAD_URL, true);
        xhr.onload = () => {
            // do something to response
            let object = JSON.parse(xhr.responseText);
            console.log(object["road_id"]);
            if (xhr.responseText === ROAD_CREATE_SUCCESSFULLY_TEXT) {
                console.log("aaaaa");
                // this.setState({justForReRender: !this.state.justForReRender})
                this.componentDidMount()
            } else {
                console.log(object["road_id"]);

            }
        };
        xhr.send(data);
    };

    onSearchBarChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        let filteredWay = [...this.state.roads];
        filteredWay = filteredWay.filter((way) => {
            let way_name = way["source"] + "-" + way["destination"];
            return way_name.toLowerCase().includes(this.state.searchField);
        });
        return (
            (this.state.roads.length === 0)
                ? null
                : <div className="container create-road-camera-container">
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
                                    data-target="#road-creator-modal">
                                استعلام مسیر
                            </button>
                        </div>
                        <div className="col-sm-1 col-md-3">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {
                                filteredWay.map((el) => {
                                    let way = el["source"] + "-" + el["destination"];
                                    return (
                                        <RoadCard
                                            way={way}
                                            province={el["province"]}
                                            road_id={el["road_id"]}/>
                                    )
                                })
                            }
                        </div>
                    </div>


                    {/*Modal*/}
                    <div className="modal fade" id="road-creator-modal" tabindex="-1" role="dialog"
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
                                                <h5 dir={'rtl'} className="modal-title road-creator-modal-title"
                                                    id="exampleModalLabel">
                                                    افزودن مسیر جدید
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container'>
                                    <div className="row">
                                        <div className="modal-body">
                                            <div className="row road-creator-modal-body">
                                                <div className="col">
                                                </div>
                                                <div className="col-9">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="form-group">
                                                                    <label className="road-creator-form-label"
                                                                           htmlFor="road-creator-form-road-id">
                                                                        کد مسیر:
                                                                    </label>
                                                                    <input type="number"
                                                                           className="form-control road-creator-form-input"
                                                                           id="road-creator-form-rad-id"
                                                                           ref={node => {
                                                                               this.road_id = node
                                                                           }}
                                                                           placeholder="کد"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="road-creator-form-label"
                                                                        htmlFor="road-creator-form-province">
                                                                        استان:
                                                                    </label>
                                                                    <select
                                                                        className="form-control road-creator-form-select"
                                                                        id="road-creator-form-province"
                                                                        ref={node => {
                                                                            this.province = node
                                                                        }}>
                                                                        {province.map(el => {
                                                                            return <option
                                                                                className="road-creator-form-select">
                                                                                {el}
                                                                            </option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="road-creator-form-label"
                                                                           htmlFor="road-creator-form-source">
                                                                        مبدا:
                                                                    </label>
                                                                    <input type="text"
                                                                           className="form-control road-creator-form-input"
                                                                           id="road-creator-form-source"
                                                                           ref={node => {
                                                                               this.source = node
                                                                           }}
                                                                           placeholder="مبدا"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="road-creator-form-label"
                                                                        htmlFor="road-creator-form-destination">
                                                                        مقصد:
                                                                    </label>
                                                                    <input type="text"
                                                                           className="form-control road-creator-form-input"
                                                                           id="road-creator-form-destination"
                                                                           ref={node => {
                                                                               this.destination = node
                                                                           }}
                                                                           placeholder="مقصد"/>
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
                                        <div className="modal-footer road-creator-modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">خروج
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={this.createRoadOnClick}>ثبت
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
        console.log("hello");
        fetch("https://smart.com/api/location/getRoads/")
            .then(response => response.json())
            .then((data) => {
                    console.log(data);
                    this.setState({roads: data})
                }
            )
    }

}

export default CreateRoadAndCamera;