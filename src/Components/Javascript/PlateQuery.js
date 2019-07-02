import React, {Component} from 'react'
import 'bootstrap'
import '../Css/PlateQuery.css'
import SmartRoadMap from '../../Map/Javascript/SmartRoadMap'
import {plateChar, month, day} from '../../assets/Jsons/JsonFiles'

class PlateQuery extends Component {
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
                            <SmartRoadMap lat={"35.689198"} lang={"51.388973"}/>
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
                                                                <select className="form-control plate-query-form-select"
                                                                        id="plate-query-form-plate-char">
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
                                                                        placeholder="ماه">
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
                                                                        placeholder="روز">
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
                                        <button type="button" className="btn btn-primary">استعلام</button>
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