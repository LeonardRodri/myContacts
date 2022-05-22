const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Metodos da aplicaçao
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

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
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
