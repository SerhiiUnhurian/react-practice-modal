import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import clss from './ErrorModal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={clss.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ onClose, title, message }) => {
  return (
    <Card className={clss.modal}>
      <header className={clss.header}>
        <h2>{title}</h2>
      </header>
      <div className={clss.content}>
        <p>{message}</p>
      </div>
      <footer className={clss.actions}>
        <Button onClick={onClose}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ErrorModal;
