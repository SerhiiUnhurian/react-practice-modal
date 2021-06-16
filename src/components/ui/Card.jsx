import clss from './Card.module.css';

const Card = ({ children, className }) => {
  return <div className={`${clss.card} ${className}`}>{children}</div>;
};

export default Card;
