import { Col, Toast } from 'react-bootstrap';

import './ErrorMessage.scss';

const ErrorMessage = ({isShowToggle, closeToggle}) => {
    return (
      <div className="Toggle">
        <Col xs={6} className="my-1">
        <Toast onClick={() => closeToggle()} show={isShowToggle} animation={false}>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Error Message</strong>
            <small>Backend error</small>
          </Toast.Header>
          <Toast.Body>Ups, something went wrong!</Toast.Body>
        </Toast>
      </Col>
      </div>
    );
};

export default ErrorMessage;