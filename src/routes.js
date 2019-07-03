import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const users = await User.create({
    name: 'Camila',
    email: 'cs.queiroz27@outlook.com',
    password_hash: '44444',
  });
  return res.json(users);
});

export default routes;
