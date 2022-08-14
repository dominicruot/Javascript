import React from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

function landing() {

    return (
        <>
            <br />
            <Alert variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    React Bootstrap
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    {/* <Button variant="outline-success">
                        Close me y'all!
                    </Button> */}
                </div>
            </Alert>

        </>
    );
}

export default landing