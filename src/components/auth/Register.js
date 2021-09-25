import { Formik } from 'formik';
import * as yup from 'yup';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
//import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
//const { Formik } = formik;

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    // username: yup.string().required(),
    // city: yup.string().required(),
    // state: yup.string().required(),
    // zip: yup.string().required(),
    // terms: yup.bool().required(),
});

function FormExample(open, close) {
    return (
        // <Row>
        //     <Col>

        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                firstName: '',
                lastName: '',
                // username: '',
                // city: '',
                // state: '',
                // zip: '',
                // terms: false,
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                isValid,
                errors,
                isSubmitting
            }) => (
                <Modal
                    show={open}
                    onHide={close}
                    id="register"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header
                        closeButton
                        style={{ backgroundColor: "darkorange" }}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Welcome! Let's Sign UP
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={close}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            // as="input"
                            disabled={!isValid}

                        >Submit form</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Formik>
        //     </Col>
        // </Row>
    );
}

export default FormExample;