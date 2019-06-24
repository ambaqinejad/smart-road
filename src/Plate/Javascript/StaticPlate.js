import React from 'react'
import {Container, Col, Row, Image} from "react-bootstrap";
import flag from '../../assets/images/2000px-Flag_of_Iran_official.svg.png'
import '../Css/StaticPlate.css'
import 'tachyons'

const staticPlate = (props) => {


    return (
        <div className={'static-plate-div grow shadow-5 tc dib ma3'}>
            <Container fluid>
                <Row>
                    <Col xs={2} className={'static-plate-flag-part'}>
                        <Row>
                            <Image className={'static-plate-image'}
                                   src={flag} alt={'IRAN'} fluid rounded/>
                        </Row>
                        <Row>
                            <span className={'static-plate-span ' +
                            'static-plate-span-margin-top'}>IR</span>
                        </Row>
                        <Row>
                            <span className={'static-plate-span'}>IRAN</span>
                        </Row>
                    </Col>
                    <Col xs={7} className={'static-plate-plate-number-part'} >
                        <span className={'static-plate-plate-number'} dir={"rtl"}>
                            {props.plate_number}
                        </span>
                    </Col>
                    <Col xs={3} className={'static-plate-code-part'}>
                        <Row>
                            <span className={'static-plate-code-part-span ' +
                            'static-plate-code-part-span-name'}>ایران</span>
                        </Row>
                        <Row>
                            <span className={'static-plate-code-part-span ' +
                            'static-plate-code-part-span-code'}>{props.plate_code}</span>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default staticPlate;