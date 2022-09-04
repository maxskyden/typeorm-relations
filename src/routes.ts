import { Router } from 'express';
import usersRouter from './routes/user.routes';
import ordersRouter from './routes/order.routes';
const routes = Router();

routes.use('/users', usersRouter)
routes.use('/orders', ordersRouter)

export default routes;
