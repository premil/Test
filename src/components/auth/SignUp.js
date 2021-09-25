import React, { useState } from "react";
import { Modal, Form, Col, Row, Button } from "react-bootstrap";

const SignUP = props => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Modal
            size={props.size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            animation={false}
        >
            <Modal.Header
                closeButton
                onClick={props.onCancel}
                style={{ backgroundColor: "darkorange" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Welcome! Let's Sign UP
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                        {props.Content}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                    </Row>
                </Form>
                </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onCancel}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={props.onSubmit}>
                    {isLoading ? "Please wait.." : "Submit"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SignUP;
