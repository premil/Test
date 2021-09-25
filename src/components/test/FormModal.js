import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import SecondModal from "./SecondModal";
import FormFields from "./FormFields";

const FormModal = props => {
    const [isLoading, setIsLoading] = useState(false);

    const [open, setOpen] = useState(false);

  const doSubmit = (values) => {
    alert(JSON.stringify(values));
    setOpen(false)
  };

    return (
        <Modal
            size={props.size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            animation={false}
        >
            <Modal.Header>
                <Modal.Title>My Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.Content}</Modal.Body>
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
                <Button
                    onClick={() => setOpen(true)}>
                    Open modal
                </Button>
                {open && (
                    <SecondModal
                        onCancel={() => setOpen(false)}
                        show={open}
                        Content={<FormFields />}
                        onSubmit={() => doSubmit()}

                    />
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;
