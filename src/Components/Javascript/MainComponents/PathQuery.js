import React, {Component} from "react"
import L from 'leaflet'
import {day, month, plateChar} from "../../../Constants/Jsons/JsonFiles";
import {GET_PATH_URL} from "../../../Constants/Apis/ApiAddresses"
import {CAR_DOES_NT_EXIST_TEXT} from "../../../Constants/Text/TextConstants"
import 'bootstrap'
import '../../Css/Maincomponents/Query.css'
import 'leaflet-routing-machine'
import 'bootstrap'
import 'leaflet/dist/leaflet.css'
import '../../Css/Maincomponents/PathQuery.css'


// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });

class PathQuery extends Component {

    state = {
        path: [],
        mapFirstLoad: true
    };

    pathQueryOnClick = () => {
        if (this.plateNumber.value < 10000 || this.plateNumber.value > 99999) {
            alert("شماره باید ۵ رقمی باشد")
        } else {
            if (this.year.value < 1300 || this.year.value > 1500) {
                alert("سال باید مقداری بین ۱۳۰۰ تا ۱۵۰۰ داشته باشد")
            } else {
                if (this.plateCode.value === "" || this.hour.value === ""
                                        || this.minute.value === "") {
                    alert("لطفا موارد مورد نیاز را وارد کنید")
                } else {
                    let plateNumber = this.plateNumber.value + this.plateCode.value;
                    let plateChar = this.plateChar.value;
                    let year = this.year.value;
                    let month = this.month.value;
                    let day = this.day.value;
                    let hour = this.hour.value;
                    let minute = this.minute.value;
                    let data = new FormData();
                    data.append("plate_char", plateChar);
                    data.append("plate_num", plateNumber);
                    data.append("year", year);
                    data.append("month", month);
                    data.append("day", day);
                    data.append("hour", hour);
                    data.append("minute", minute);
                    console.log(data);
                    this.handleQuery(data)
                }
            }
        }
    };


    handleQuery = (data) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", GET_PATH_URL, true);
        xhr.onload = () => {
            if (xhr.responseText.toString() === CAR_DOES_NT_EXIST_TEXT) {

            } else {
                let object = JSON.parse(xhr.responseText);
                this.setState({path: object});
                if(this.state.mapFirstLoad) {
                    this.map = L.map('map');
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
                        .addTo(this.map);
                    this.setState({mapFirstLoad: false})
                }
                let waypoint = [];
                for(let i = 0; i < this.state.path.length; i++) {
                    waypoint.push(L.latLng(this.state.path[i]["longitude"],
                        this.state.path[i]["latitude"]))
                }
                L.Routing.control({
                    waypoints: waypoint,
                    plan: false
                }).addTo(this.map);
            }
        };
        xhr.send(data);
    };


    componentDidMount() {

        // L.Routing.control({
        //     waypoints: [
        //         // L.latLng(27.74, 53.94),
        //         //                 // L.latLng(32.97, 58.949)
        //         this.state.path.map((el) => {
        //             return L.latLng(el.latitude, el.longitude)
        //         })
        //     ],
        //     plan: false
        //
        // }).addTo(this.map);

        // L.marker(
        //     [57, 11.94], {
        //         riseOnHover:true
        //     }).addTo(this.map);
        // L.marker(L.latLng(57, 11.949)).addTo(this.map)
    }

    render() {
        return (
            <div className={'path-query'}>
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <button className='query-button'
                                    data-toggle="modal"
                                    data-target="#path-query-modal">
                                استعلام مسیر
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-">
                        </div>
                        <div className="col-12">
                            {/*<SmartRoadMap lat={"35.689198"} lang={"51.388973"}/>*/}
                            <div id={'map'}>

                            </div>
                        </div>
                        <div className="col-">
                        </div>
                    </div>
                </div>


                {/*Modal*/}
                <div className="modal fade" id="path-query-modal" tabIndex="-1" role="dialog"
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
                                            <h5 dir={'rtl'} className="modal-title path-query-modal-title"
                                                id="exampleModalLabel">
                                                استعلام مسیر
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="modal-body">
                                        <div className="row path-query-modal-body">
                                            <div className="col">
                                            </div>
                                            <div className="col-9">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="path-query-form-label"
                                                                       htmlFor="path-query-form-plate-number">
                                                                    شماره پلاک:
                                                                </label>
                                                                <input type="number"
                                                                       className="form-control path-query-form-input"
                                                                       id="path-query-form-plate-number"
                                                                       min="10000"
                                                                       max="99999"
                                                                       placeholder="شماره پلاک"
                                                                       ref={node => {
                                                                           this.plateNumber = node;
                                                                       }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="path-query-form-label"
                                                                    htmlFor="path-query-form-plate-code">
                                                                    کد پلاک:
                                                                </label>
                                                                <input type="number"
                                                                       className="form-control path-query-form-input"
                                                                       id="path-query-form-plate-code"
                                                                       min="10"
                                                                       max="99"
                                                                       placeholder="کد پلاک"
                                                                       ref={node => {
                                                                           this.plateCode = node;
                                                                       }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="path-query-form-label"
                                                                    htmlFor="plate-query-form-plate-char">
                                                                    حرف پلاک:
                                                                </label>
                                                                <select className="form-control path-query-form-select"
                                                                        id="path-query-form-plate-char"
                                                                        ref={node => {
                                                                            this.plateChar = node;
                                                                        }}>
                                                                    {plateChar.map(el => {
                                                                        return <option
                                                                            className="path-query-form-select">
                                                                            {el}
                                                                        </option>
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label className="path-query-form-label"
                                                                       htmlFor="path-query-form-year">
                                                                    سال
                                                                </label>
                                                                <input type="number"
                                                                       min="1300"
                                                                       max="1500"
                                                                       className="form-control path-query-form-input"
                                                                       id="path-query-form-year"
                                                                       placeholder="سال"
                                                                       ref={node => {
                                                                           this.year = node;
                                                                       }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label
                                                                    className="path-query-form-label"
                                                                    htmlFor="path-query-form-month">
                                                                    ماه
                                                                </label>
                                                                <select
                                                                    className="form-control path-query-form-select"
                                                                    id="path-query-form-month"
                                                                    placeholder="ماه"
                                                                    ref={node => {
                                                                        this.month = node;
                                                                    }}>
                                                                    {month.map(el => {
                                                                        return <option
                                                                            className="path-query-form-select">
                                                                            {el}
                                                                        </option>
                                                                    })}
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label
                                                                    className="path-query-form-label"
                                                                    htmlFor="path-query-form-day">
                                                                    روز
                                                                </label>
                                                                <select
                                                                    className="form-control path-query-form-select"
                                                                    id="path-query-form-day"
                                                                    placeholder="روز"
                                                                    ref={node => {
                                                                        this.day = node;
                                                                    }}>
                                                                    {day.map(el => {
                                                                        return <option
                                                                            className="path-query-form-select">
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
                                                                <label className="path-query-form-label"
                                                                       htmlFor="path-query-form-hour">
                                                                    ساعت:
                                                                </label>
                                                                <input type="number"
                                                                       className="form-control path-query-form-input"
                                                                       id="path-query-form-hour"
                                                                       min="0"
                                                                       max="23"
                                                                       placeholder="ساعت"
                                                                       ref={node => {
                                                                           this.hour = node;
                                                                       }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="path-query-form-label"
                                                                       htmlFor="path-query-form-minute">
                                                                    دقیقه:
                                                                </label>
                                                                <input type="number"
                                                                       className="form-control path-query-form-input"
                                                                       id="path-query-form-minute"
                                                                       min="0"
                                                                       max="59"
                                                                       placeholder="دقیقه"
                                                                       ref={node => {
                                                                           this.minute = node;
                                                                       }}/>
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
                                    <div className="modal-footer path-query-modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">خروج
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.pathQueryOnClick}>استعلام
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
}

export default PathQuery;