const ContactRepository = require('../repositories/ContactsRepository');

// Metodos da aplicaçao
class ContactController {
  // Obter Varios registros
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  // Obter apenas um registro
  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    // Criar um novo registro
    const {
      name, email, phone, categoryId,
    } = request.body;

    const contactExists = await ContactRepository.findByIdEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }
    const contact = await ContactRepository.create({
      name, email, phone, categoryId,
    });
    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, categoryId,
    } = request.body;

    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactEmail = await ContactRepository.findByIdEmail(email);
    if (contactEmail && contactEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }
    const contact = await ContactRepository.update(id, {
      name, email, phone, categoryId,
    });
    response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404: Not found
      return response.status(404).json({ error: 'Contact not found' });
    }
    await ContactRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
