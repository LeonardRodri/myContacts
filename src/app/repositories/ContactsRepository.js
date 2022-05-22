const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Leonardo',
    email: 'leonardo@email.com',
    phone: '123344567788876',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Rodrigues',
    email: 'leonardo@email.com',
    phone: '123344567788876',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
