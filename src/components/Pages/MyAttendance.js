import React from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import DateObject from "react-date-object";

export default class MyAttendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            driverName: "",
            attDate: "",
            routeNumber: "",
            pdaNumber: "",
            startTime: "",
            endTime: "",
            spvSign: "",
            vehicleType: "",
            notes: "", 
        };
    }

    setDate() {
        let date = new DateObject();
        return date.format("DD/MMM/YYYY");
    }

    render() {
        return(
            <div className="myAttendance">
                <h1 className="header">Attendance Form</h1>
                <Form className="attendance-form">
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>
                                    Driver Name: Imanuel Halim
                                </Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>
                                    Date: {this.setDate()}
                                </Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextFullName">
                         <Form.Label column sm="2">
                            Route Number
                        </Form.Label>
                        <Col column sm="4">
                            <Form.Control
                                type="number"
                                placeholder="enter last 3 digits of route number"
                                htmlSize={3}
                                value={this.state.routeNumber}
                                onChange={(event) => {
                                    event.preventDefault();
                                    this.setState({routeNumber: event.target.value});
                                }}
                            />
                        </Col>

                         <Form.Label column sm="2">
                            Scanner / PDA Number
                        </Form.Label>
                        <Col column sm="4">
                            <Form.Control
                                type="text"
                                placeholder="enter last 4 digits of scanner / PDA number"
                                htmlSize={3}
                                value={this.state.pdaNumber}
                                onChange={(event) => {
                                    event.preventDefault();
                                    this.setState({pdaNumber: event.target.value});
                                }}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}