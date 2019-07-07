import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import FakePlatePart from '../../../Plate/Javascript/FakePlatePart'
import SmartRoadMap from '../../../Map/Javascript/SmartRoadMap'
// import 'bootstrap'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container fluid>
                    <Row>
                        <Col xs={12} md={5} lg={7}>
                            <SmartRoadMap lat={"35.689198"} lang={"51.388973"}/>
                        </Col>
                        <Col xs={12} md={7} lg={5}>
                            <FakePlatePart/>
                        </Col>
                    </Row>
                </Container>
                {/*<div className="container-fluid">*/}
                    {/*<div className='row'>*/}
                        {/*<div className="col-sm-12 col-md-4">*/}

                        {/*</div>*/}
                        {/*<div className="col-sm-12 col-md-8">*/}

                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }

}

export default Home;
