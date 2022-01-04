import React from 'react'

export default class MyAttendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="myAttendance">
                <h1 className="header">Attendance Form</h1>
            </div>
        );
    }
}