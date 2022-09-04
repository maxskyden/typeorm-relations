import { Router } from "express";
import OrdersController from "src/controllers/OrdersController";

const ordersRouter = Router()
const ordersController = new OrdersController()

ordersRouter.get('/', ordersController.index)
ordersRouter.get('/:id', ordersController.show)
ordersRouter.post('/', ordersController.create)
// ordersRouter.put('/:id', ordersController.update)
// ordersRouter.delete('/:id', ordersController.delete)

export default ordersRouter
