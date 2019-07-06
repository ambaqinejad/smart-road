import React, {Component} from 'react'
import SmartRoadMap from '../../Map/Javascript/SmartRoadMap'
import {plateChar, month, day} from '../../Constants/Jsons/JsonFiles'
import {GET_CURRENT_LOCATION} from "../../Constants/Apis/ApiAddresses"
import {CAR_DOES_NT_EXIST_TEXT} from "../../Constants/Text/TextConstants"
import 'bootstrap'
import '../Css/Query.css'

class PlateQuery extends Component {

    state = {
        coordinate: {
            lat: "",
            lang: ""
        }
    };

    plateQueryOnClick = () => {
        let plateQueryModal = document.getElementById("plate-query-modal");
        

        if (this.plateNumber.value < 10000 || this.plateNumber.value > 99999) {
            alert("شماره باید ۵ رقمی باشد")
        } else {
            if (this._year.value < 1300 || this._year.value > 1500) {
                alert("سال باید مقداری بین ۱۳۰۰ تا ۱۵۰۰ داشته باشد")
            } else {
                if (this.plateCode.value === "") {
                    alert("حرف پلاک را مشخص کنید")
                } else {
                    let plateNumber = this.plateNumber.value + this.plateCode.value;
                    let plateChar = this.plateChar.value;
                    let year = this._year.value;
                    let month = this._month.value;
                    let day = this._day.value;
                    // console.log(body);
                    let data = new FormData();
                    data.append('plate_char', plateChar);
                    data.append('plate_num', plateNumber);
                    data.append('year', year);
                    data.append('month', month);
                    data.append('day', day);
                    console.log(data);
                    this.handleQuery(data)
                }
            }
        }


    };


    handleQuery = (data) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', GET_CURRENT_LOCATION, true);
        xhr.onload = function () {
            // do something to response
            console.log(xhr.responseText);
            if(xhr.responseText.toString() === CAR_DOES_NT_EXIST_TEXT) {

            } else {
                let object = JSON.parse(xhr.responseText);
                console.log(object["province"]);
                this.setState({
                    coordinate: {
                        lat: object["longitude"],
                        lang: object["latitude"]
                    }
                })
            }

        }.bind(this);
        xhr.send(data);
    };

    render() {
        return (
            <div className={'plate-query'}>
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <button className='query-button'
                                    data-toggle="modal"
                                    data-target="#plate-query-modal">
                                استعلام پلاک
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-">
                        </div>
                        <div className="col-12">
                            {(this.state.coordinate.lang === "" || this.state.coordinate.lat === "") ?
                                <SmartRoadMap lat={"35.689198"} lang={"51.388973"}/> :
                                <SmartRoadMap
                                    lat={this.state.coordinate.lat}
                                    lang={this.state.coordinate.lang}/>
                            }
                        </div>
                        <div className="col-">
                        </div>
                    </div>
                </div>


                {/*Modal*/}
                <div className="modal fade" id="plate-query-modal" tabindex="-1" role="dialog"
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
                                            <h5 dir={'rtl'} className="modal-title plate-query-modal-title"
                                                id="exampleModalLabel">
                                                پلاک مورد نظر را وارد نمایید.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="modal-body">
                                        <div className="row plate-query-modal-body">
                                            <div className="col">
                                            </div>
                                            <div className="col-9">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="plate-query-form-label"
                                                                       htmlFor="plate-query-form-plate-number">
                                                                    شماره پلاک:
                                                                </label>
                                                                <input type="number"
                                                                       className="form-control plate-query-form-input"
                                                                       id="plate-query-form-plate-number"
                                                                       min="10000"
                                                                       max="99999"
                                                                       ref={node => {
                                                                           this.plateNumber = node
                                                                       }}
                                                                       placeholder="شماره پلاک"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="plate-query-form-label"
                                                                    htmlFor="plate-query-form-plate-code">
                                                                    کد پلاک:
                                                                </label>
                                                                <input type="number"
                                                                       className="form-control plate-query-form-input"
                                                                       id="plate-query-form-plate-code"
                                                                       min="10"
                                                                       max="99"
                                                                       ref={node => {
                                                                           this.plateCode = node
                                                                       }}
                                                                       placeholder="کد پلاک"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="plate-query-form-label"
                                                                    htmlFor="plate-query-form-plate-char">
                                                                    حرف پلاک:
                                                                </label>
                                                                <select
                                                                    className="form-control plate-query-form-select"
                                                                    id="plate-query-form-plate-char"
                                                                    ref={node => {
                                                                        this.plateChar = node
                                                                    }}>
                                                                    {plateChar.map(el => {
                                                                        return <option
                                                                            className="plate-query-form-select">
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
                                                                <label className="plate-query-form-label"
                                                                       htmlFor="plate-query-form-year">
                                                                    سال
                                                                </label>
                                                                <input type="number"
                                                                       min="1300"
                                                                       max="1500"
                                                                       className="form-control plate-query-form-input"
                                                                       id="plate-query-form-year"
                                                                       ref={node => {
                                                                           this._year = node
                                                                       }}
                                                                       placeholder="سال"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="plate-query-form-label"
                                                                        htmlFor="plate-query-form-month">
                                                                        ماه
                                                                    </label>
                                                                    <select
                                                                        className="form-control plate-query-form-select"
                                                                        id="plate-query-form-month"
                                                                        placeholder="ماه"
                                                                        ref={node => {
                                                                            this._month = node
                                                                        }}>
                                                                        {month.map(el => {
                                                                            return <option
                                                                                className="plate-query-form-select">
                                                                                {el}
                                                                            </option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="plate-query-form-label"
                                                                        htmlFor="plate-query-form-day">
                                                                        روز
                                                                    </label>
                                                                    <select
                                                                        className="form-control plate-query-form-select"
                                                                        id="plate-query-form-day"
                                                                        placeholder="روز"
                                                                        ref={node => {
                                                                            this._day = node
                                                                        }}>
                                                                        {day.map(el => {
                                                                            return <option
                                                                                className="plate-query-form-select">
                                                                                {el}
                                                                            </option>
                                                                        })}
                                                                    </select>
                                                                </div>
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
                                    <div className="modal-footer plate-query-modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">خروج
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.plateQueryOnClick}>استعلام
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

export default PlateQuery