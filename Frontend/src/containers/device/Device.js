import { Card } from 'react-bootstrap';
import './Device.scss';

const Devices = ({device, deleteDevice, editDevice}) => {
    return (
          <Card style={{ width: '18rem' }} className="Device">
            <Card.Body>
            <Card.Title className="Device__title">{device.name}</Card.Title>
        
            <Card.Text className="Device__description">
            {device.description}
            </Card.Text>
            <Card.Link onClick={() => editDevice(device)}>Edit</Card.Link>
            <Card.Link onClick={() => deleteDevice(device.id)}>Delete</Card.Link>
            <p> {device.disabled ? "true" : "false"}</p>
        </Card.Body>
      </Card>

    );
}

export default Devices;