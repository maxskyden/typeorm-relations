import { Request, Response } from "express"
import { container } from 'tsyringe';
import Create from "src/services/order/Create";
import List from "src/services/order/List";
import Show from "src/services/order/Show";
import Update from "src/services/order/Update";
import Delete from "src/services/order/Delete";
import History from "src/services/order/History";

class OrdersController{
  async index(request: Request, response: Response): Promise<Response>{
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15
    const listOrders = container.resolve(List)
    const orders = await listOrders.execute({ page, limit })
    return response.json(orders)
  }
  async show(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const showOrder = container.resolve(Show)
    const order = await showOrder.execute({ id })
    return response.json(order)
  }
  async history(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15

    const orderHistory = container.resolve(History)
    const history = await orderHistory.execute(id,{ page, limit })
    return response.json(history)
  }
  async create(request: Request, response: Response): Promise<Response> {
    const { pid, payment_status, user_id } = request.body
    const createOrder = container.resolve(Create)
    const order = await createOrder.execute({
      user_id,
      pid,
      payment_status
    })
    return response.json(order)
  }
  async update(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const { payment_status } = request.body
    const update = container.resolve(Update)
    const order = await update.execute({ id, payment_status })
    return response.json(order)
  }
  async delete(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const deleteOrder = container.resolve(Delete)
    await deleteOrder.execute({id})
    return response.json([])
  }
}
export default OrdersController
