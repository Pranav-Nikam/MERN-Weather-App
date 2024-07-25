import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Alert extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ marginTop: '30px', width: '100%', maxWidth: '600px' }}>
                    <strong>Error!</strong> Enter a valid location.
                </div>
            </div>
        );
    }
}

export default Alert;
