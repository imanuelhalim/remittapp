import React from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';

export default function WorkHistory() {
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
                    <th>PDA Run</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Sign</th>
                    <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
