import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import FakePlatePart from '../../Plate/Javascript/FakePlatePart'
import SmartRoadMap from '../../Map/Javascript/SmartRoadMap'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container fluid>
                    <Row>
                        <Col xs={12} md={5} lg={7}>
                            <SmartRoadMap/>
                        </Col>
                        <Col xs={12} md={7} lg={5}>
                            <FakePlatePart/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Home;
