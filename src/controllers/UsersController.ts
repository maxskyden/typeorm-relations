import { Request, Response } from "express"
import { container } from 'tsyringe';
import Create from "src/services/user/Create";
import Delete from "src/services/user/Delete";
import List from "src/services/user/List";
import Show from "src/services/user/Show";
import Update from "src/services/user/Update";


class UsersController{
  async index(request: Request, response: Response): Promise<Response>{
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15
    const listUsers = container.resolve(List)
    const users = await listUsers.execute({ page, limit })
    return response.json(users)
  }
  async show(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const showUser = container.resolve(Show)
    const user = await showUser.execute({ id })
    return response.json(user)
  }
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const createUser = container.resolve(Create)
    const user = await createUser.execute({
      name
    })
    return response.json(user)
  }
  async update(request: Request, response: Response): Promise<Response>{
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
  }
}
export default UsersController
