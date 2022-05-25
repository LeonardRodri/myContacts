const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Leonardo',
    email: 'leonardo@email.com',
    phone: '123344567788876',
    categoryId: v4(),
  },
  {
    id: v4(),
    name: 'Rodrigues',
    email: 'leonardo@email.com',
    phone: '123344567788876',
    categoryId: v4(),
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

  findByIdEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create(name, email, phone, categoryId) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        categoryId,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, name, email, phone, categoryId) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        categoryId,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }
}

module.exports = new ContactRepository();
