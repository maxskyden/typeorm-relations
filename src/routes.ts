import { Router } from 'express';
import usersRouter from './routes/user.routes';
import ordersRouter from './routes/order.routes';
import labelsRouter from './routes/label.routes';
const routes = Router();

routes.use('/users', usersRouter)
routes.use('/orders', ordersRouter)
routes.use('/labels', labelsRouter)
export default routes;
