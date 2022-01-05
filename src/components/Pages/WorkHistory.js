import React from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';

export default function WorkHistory() {
    function dateformat() {
        const today = Date.now();
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today));
    }
    
    return (
        <div className="workHistory">
            <h1 className="header">Work History</h1>
            <Container>
                <Row>
                    <Col><h2 className="sub-header">Driver Name: Imanuel Halim</h2></Col>
                    <Col><button className="sort">Sort V</button></Col>
                </Row>
            </Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Date</th>
                    <th>Driver No.</th>
                    <th>PDA/Run</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>SPV Sign</th>
                    <th>Vehicles Type</th>
                    <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>04/01/2022</td>
                    <td>P478</td>
                    <td>SO1</td>
                    <td>07:00</td>
                    <td>17:00</td>
                    <td>Mark</td>
                    <td>Van</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>05/01/2022</td>
                    <td>P478</td>
                    <td>SO1</td>
                    <td>07:00</td>
                    <td>16:30</td>
                    <td>Mark</td>
                    <td>Truck</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>06/01/2022</td>
                    <td>P478</td>
                    <td>SO1</td>
                    <td>07:00</td>
                    <td>18:00</td>
                    <td>Mark</td>
                    <td>Van</td>
                    <td>-</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
