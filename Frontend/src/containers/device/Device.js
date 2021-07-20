import { Button, Card } from "react-bootstrap";
import "./Device.scss";

const Devices = ({ device, deleteDevice, editDevice }) => {
  return (
    <Card style={{ width: "18rem" }} className="Device">
      <Card.Body>
        <Card.Title className="Device__title">{device.name}</Card.Title>
        <p>Disabled: {device.disabled ? "true" : "false"}</p>
        <Card.Text className="Device__description">
          {device.description}
        </Card.Text>
        <div className="Device__buttons">
          <Button variant="outline-primary" onClick={() => editDevice(device)}>
            Edit
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => deleteDevice(device.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Devices;
