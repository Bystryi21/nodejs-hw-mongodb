import * as contactServices from '../services/contact.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res, next) => {
  const data = await contactServices.getContacts();
  console.log(data);
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const data = await contactServices.getContactById(id);

  if (!data) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data,
  });
};

export const addContactController = async (req, res, next) => {
  const data = await contactServices.addContact(req.body);

  res.status().json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};
