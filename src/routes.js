import Router from 'express';

import Users from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await Users.create({
    name: 'Gustavo Arvelos',
    email: 'gvmarvelos@gmail.com',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
