import style from './ContactList.module.css';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
};
