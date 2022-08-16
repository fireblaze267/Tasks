import { Alert } from '@mantine/core';
import { ExclamationCircleFill } from 'react-bootstrap-icons';


function AlertMessage(message: string) {
  return (
    <Alert icon={<ExclamationCircleFill size={16} fill='red' />} title="Bummer!" color="red">
      {message}
    </Alert>
  );
}

export default AlertMessage