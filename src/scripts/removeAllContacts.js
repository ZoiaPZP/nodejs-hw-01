import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const removeAllContacts = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('No contacts to remove.');
  } else {
    await writeContacts([]);
    console.log('All contacts removed');
  }
};

removeAllContacts();


