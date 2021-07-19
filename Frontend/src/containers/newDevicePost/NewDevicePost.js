import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'


const NewDevicePost = ({submit}) => {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)}/>
            <Form.Text className="text-muted">
            {name === '' ? "Name is required" : ''}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={event => setDescription(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check value={disabled} onChange={() => setDisabled(!disabled)} type="checkbox" label={disabled ? "Disabled - true" : "Disabled - false"} />
        </Form.Group>

        <Button disabled={name === ''} svariant="dark" type="submit" onClick={() => submit(name, description, disabled)}>
            Submit
        </Button>
        </Form>

    );
}

export default NewDevicePost;