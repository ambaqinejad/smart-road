import React from 'react'
import {Col, Row} from "react-bootstrap";
import StaticPlate from "./StaticPlate";


const fakePlatePart = () => {
    const plate = [
        {
            number: "۲۹۳ع۵۴",
            code: "۳۳"
        },
        {
            number: "۱۳۸د۱۸",
            code: "۲۸"
        },
        {
            number: "۲۳۳الف۲۳",
            code: "۶۸"
        },
        {
            number: "۱۵۶ق۱۹",
            code: "۱۱"
        }
    ];

    return (
        <div>
            {plate.map((el, idx) => {
                if (idx % 2 === 0) {
                    return (
                        <Row>
                            <Col sm={12}>
                                <StaticPlate
                                    plate_number={plate[idx].number}
                                    plate_code={plate[idx].code}/>
                            </Col>
                            <Col sm={12}>
                                <StaticPlate
                                    plate_number={plate[idx + 1].number}
                                    plate_code={plate[idx + 1].code}/>
                            </Col>
                        </Row>
                    )
                } else {
                    return null
                }
            })}
        </div>
    );}

    export default fakePlatePart