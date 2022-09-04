import { Request, Response } from "express"
import { container } from 'tsyringe';
import Create from "src/services/order/Create";
import List from "src/services/order/List";
import Show from "src/services/order/Show";



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
  async create(request: Request, response: Response): Promise<Response> {
    const { pid, payment_status, user_id } = request.body
    const createUser = container.resolve(Create)
    const order = await createUser.execute({
      pid,
      payment_status,
      user_id,
    })
    return response.json(order)
  }
/*   async update(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const { name } = request.body
    const update = container.resolve(Update)
    const user = await update.execute({ id, name })
    return response.json(user)
  }
  async delete(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const deleteUser = container.resolve(Delete)
    await deleteUser.execute({id})
    return response.json([])
  } */
}
export default OrdersController
