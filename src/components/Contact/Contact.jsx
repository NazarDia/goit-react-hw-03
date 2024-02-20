import style from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  return (
    <div className={style.contactContainer}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={style.deleteBtn}>Delete</button>
    </div>
  );
};
