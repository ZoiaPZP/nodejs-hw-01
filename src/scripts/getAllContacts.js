import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const contacts = await readContacts();
  
  if (contacts.length === 0) {
    console.log('No contacts found.');
  } else {
    console.log(contacts);
  }
};

getAllContacts();


