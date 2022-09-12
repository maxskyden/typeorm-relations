import { Request, Response } from "express"
import { container } from 'tsyringe';
import Create from "src/services/label/Create";
import List from "src/services/label/List";
import Show from "src/services/label/Show";
import Update from "src/services/label/Update";
import Delete from "src/services/label/Delete";
import History from "src/services/label/History";
import Relation from "src/services/label/Relation";
import Consulta from "src/services/label/Consulta";

class LabelsController{
  async index(request: Request, response: Response): Promise<Response>{
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15
    const listLabels = container.resolve(List)
    const labels = await listLabels.execute({ page, limit })
    return response.json(labels)
  }
  async consulta(request: Request, response: Response): Promise<Response>{
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15
    const id = request.query.id as string
    const listLabels = container.resolve(Consulta)
    const labels = await listLabels.execute(id, { page, limit })
    return response.json(labels)
  }
  async show(request: Request, response: Response): Promise<Response>{
    const { id } = request.params

    const showLabel = container.resolve(Show)
    const label = await showLabel.execute({ id })
    return response.json(label)
  }
  async relation(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const relation = container.resolve(Relation)
    const label = await relation.execute({ id })
    return response.json(label)
  }
  async history(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15

    const labelHistory = container.resolve(History)
    const history = await labelHistory.execute(id,{ page, limit })
    return response.json(history)
  }
  async create(request: Request, response: Response): Promise<Response> {
    const { order_id, name, url  } = request.body
    const createLabel = container.resolve(Create)
    const label = await createLabel.execute({
      order_id,
      name,
      url
    })
    return response.json(label)
  }
  async update(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const { name, url } = request.body
    const update = container.resolve(Update)
    const label = await update.execute({ id, name, url })
    return response.json(label)
  }
  async delete(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const deleteLabel = container.resolve(Delete)
    await deleteLabel.execute({id})
    return response.json([])
  }
}
export default LabelsController
