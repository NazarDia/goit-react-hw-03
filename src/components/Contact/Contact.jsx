import { FaPhone, FaUser } from 'react-icons/fa';
import style from './Contact.module.css';

export const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div>
      <div className={style.contactContainer}>
        <div className={style.contactItems}>
          <li className={style.listItem}>
            <FaUser />
            {contact.name}
          </li>
          <li className={style.listItem}>
            <FaPhone />
            {contact.number}
          </li>
        </div>
        <button
          className={style.contactBtn}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
