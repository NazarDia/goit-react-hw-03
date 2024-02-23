import style from './ContactList.module.css';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
