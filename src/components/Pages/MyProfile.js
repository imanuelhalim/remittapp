import React from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import '../../style_components/MyProfile.css';
import DateObject from "react-date-object";

export default class MyProfile extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            isDisplayPhoneNumber: true,
            phoneNumber: "",
            isDisplayTfn: true,
            tfn: "",
            isDisplayAbn: true,
            abn: "",
            isDisplayBankName: true,
            bankName: "",
            isDisplayBsbNum: true,
            bsbNum: "",
            isDisplayAccNum: true,
            accNum: "",
            dateRegister: "",
            latestUpdate: "",
        };
    }

    date = new DateObject();

    componentDidMount() {
        //turn on database and input the details on the state if any details, it will be using RDS for storing all information and data
    }

    componentWillUpdate(prevState) {
        console.log(prevState);
    }

    isEditPhoneNumber() {
        if(this.state.isDisplayPhoneNumber) {
            return(
                <>
                <Col sm="9">
                    <Form.Label>
                        {this.state.phoneNumber}
                    </Form.Label>
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayPhoneNumber: false})}}>
                        Edit
                    </Button>
                </Col>
                </>
            );
        } else {
            return(
                <>
                <Col sm="9">
                    <Form.Control
                        type="number"
                        placeholder="e.g. 0412345678"
                        htmlSize={10}
                        value={this.state.phoneNumber}
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({phoneNumber: event.target.value});
                        }}
                />
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {
                        this.setState({isDisplayPhoneNumber: true})
                    }}>
                        Update
                    </Button>
                </Col>
                </>
            );
        }
    }

    isEditTFN () {
        if(this.state.isDisplayTfn) {
            return(
                <>
                <Col sm="9">
                    <Form.Label>
                        {this.state.tfn}
                    </Form.Label>
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayTfn: false})}}>
                        Edit
                    </Button>
                </Col>
                </>
            );
        } else {
            return(
                <>
                <Col sm="9">
                    <Form.Control
                        type="number"
                        placeholder="e.g 123456789"
                        htmlSize={9}
                        value={this.state.tfn}
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({tfn: event.target.value});
                        }}
                    />
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayTfn: true})}}>
                        Update
                    </Button>
                </Col>
                </>
            );
        }
    }

    isEditABN () {
        if(this.state.isDisplayAbn) {
            return(
                <>
                <Col sm="9">
                    <Form.Label>
                        {this.state.abn}
                    </Form.Label>
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayAbn: false})}}>
                        Edit
                    </Button>
                </Col>
                </>
            );
        } else {
            return(
                <>
                <Col sm="9">
                    <Form.Control
                        type="number"
                        placeholder="e.g. 98765432112"
                        htmlSize={11}
                        value={this.state.abn}
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({abn: event.target.value});
                        }}
                    />
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayAbn: true})}}>
                        Update
                    </Button>
                </Col>
                </>
            );
        }
    }

    isEditBankName () {
        if(this.state.isDisplayBankName) {
            return(
                <>
                <Col sm="9">
                    <Form.Label>
                        {this.state.bankName}
                    </Form.Label>
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayBankName: false})}}>
                        Edit
                    </Button>
                </Col>
                </>
            );
        } else {
            return(
                <>
                <Col sm={9}>
                        <Form.Check
                            type="radio"
                            label="Commonwealth Bank"
                            name="bankName"
                            id="commonwealth_bank"
                            value="Commonwealth Bank"
                            onChange={this.handleSelect}
                        />
                        <Form.Check
                            type="radio"
                            label="National Australia Bank"
                            name="bankName"
                            id="national_australia_bank"
                            value="National Australia Bank"
                            onChange={this.handleSelect}
                        />
                        <Form.Check
                            type="radio"
                            label="ANZ"
                            name="bankName"
                            id="anz"
                            value="ANZ"
                            onChange={this.handleSelect}
                        />
                        <Form.Check
                            type="radio"
                            label="Westpac"
                            name="bankName"
                            id="westpac"
                            value="Westpac"
                            onChange={this.handleSelect}
                        />
                        <Form.Check
                            type="radio"
                            label="Bendigo Bank"
                            name="bankName"
                            id="bendigo_bank"
                            value="Bendigo Bank"
                            onChange={this.handleSelect}
                        />
                        <Form.Check
                            type="radio"
                            label="Bank West"
                            name="bankName"
                            id="bank_west"
                            value="Bank West"
                            onChange={this.handleSelect}
                        />
                        <Form.Check
                            type="radio"
                            label="Bank of Queensland"
                            name="bankName"
                            id="bank_of_queensland"
                            value="Bank of Queensland"
                            onChange={this.handleSelect}
                        />
                    </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayBankName: true})}}>
                        Update
                    </Button>
                </Col>
                </>
            );
        }
    }

    handleSelect = event => {
        event.preventDefault();
        this.setState({
            bankName: event.target.value
        });
    }

    isEditBsbNum () {
        if(this.state.isDisplayBsbNum) {
            return(
                <>
                <Col sm="9">
                    <Form.Label>
                        {this.state.bsbNum}
                    </Form.Label>
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayBsbNum: false})}}>
                        Edit
                    </Button>
                </Col>
                </>
            );
        } else {
            return(
                <>
                <Col sm="9">
                    <Form.Control
                        type="number"
                        placeholder="e.g. 123456"
                        htmlSize={6}
                        value={this.state.bsbNum}
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({bsbNum: event.target.value});
                        }}
                    />
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayBsbNum: true})}}>
                        Update
                    </Button>
                </Col>
                </>
            );
        }
    }

    isEditAccNum () {
        if(this.state.isDisplayAccNum) {
            return(
                <>
                <Col sm="9">
                    <Form.Label>
                        {this.state.accNum}
                    </Form.Label>
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayAccNum: false})}}>
                        Edit
                    </Button>
                </Col>
                </>
            );
        } else {
            return(
                <>
                <Col sm="9">
                    <Form.Control
                        type="number"
                        placeholder="e.g. 12345678"
                        htmlSize={6}
                        value={this.state.accNum}
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({accNum: event.target.value});
                        }}
                    />
                </Col>
                <Col sm="1">
                    <Button onClick={()=> {this.setState({isDisplayAccNum: true})}}>
                        Update
                    </Button>
                </Col>
                </>
            );
        }
    }

    render () {
        return (
            <div className="myProfile">
                <h1 className="header">
                    Profile
                </h1>
                <Form className="login-form">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmpNumber">
                        <Form.Label column sm="2">
                            Employee Number
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="20211223IH" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextFullName">
                        <Form.Label column sm="2">
                            Full Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="Imanuel Halim" />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPasswordEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="example@email.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="password">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
                        <Form.Label column sm="2">
                            Phone Number
                        </Form.Label>
                        {this.isEditPhoneNumber()}
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="tfnNumber">
                        <Form.Label column sm="2">
                            TFN Number
                        </Form.Label>
                        {this.isEditTFN()}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="abnNumber">
                        <Form.Label column sm="2">
                            ABN Number
                        </Form.Label>
                        {this.isEditABN()}
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Bank Name
                            </Form.Label>
                            {this.isEditBankName()}
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row} className="mb-3" controlId="bsbNumber">
                        <Form.Label column sm="2">
                            BSB Number
                        </Form.Label>
                        {this.isEditBsbNum()}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="accountNumber">
                        <Form.Label column sm="2">
                            Account Number
                        </Form.Label>
                        {this.isEditAccNum()}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateRegister">
                        <Form.Label column sm="2">
                            Date Register
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={this.date.format("DD/MMM/YYYY")}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateRegister">
                        <Form.Label column sm="2">
                            Latest Update
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={this.date.format("DD/MMM/YYYY")}/>
                        </Col>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Update Changes
                    </Button>

                </Form>
            </div>
        );
    }
}