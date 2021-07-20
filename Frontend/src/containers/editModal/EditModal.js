import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const EditModal = ({ show, handleClose, device, save }) => {
  const [name, setName] = useState(device.name);
  const [description, setDescription] = useState(device.description);
  const [disabled, setDisabled] = useState(device.disabled);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>You edit: {device.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New name</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Form.Text className="text-muted">
              {name === "" ? "Name is required" : ""}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              value={disabled}
              onChange={() => setDisabled(!disabled)}
              type="checkbox"
              label={disabled ? "Disabled - true" : "Disabled - false"}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          disabled={name === ""}
          variant="primary"
          onClick={() =>
            save({
              name: name,
              id: device.id,
              description: description,
              disabled: disabled,
            })
          }
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
