import clss from './Button.module.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button className={clss.button} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
