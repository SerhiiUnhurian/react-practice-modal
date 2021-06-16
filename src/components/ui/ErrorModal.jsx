import Button from './Button';
import Card from './Card';
import clss from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <div className={clss.backdrop} onClick={onClose}>
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
    </div>
  );
};

export default ErrorModal;
