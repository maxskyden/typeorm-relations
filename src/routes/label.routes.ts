import { Router } from "express";
import LabelsController from "src/controllers/LabelsController";

const labelsRouter = Router()
const labelsController = new LabelsController()

labelsRouter.get('/', labelsController.index)
labelsRouter.get('/consulta', labelsController.consulta)
labelsRouter.get('/:id', labelsController.show)
labelsRouter.get('/order/:id', labelsController.relation)
labelsRouter.get('/history/:id', labelsController.history)
labelsRouter.post('/', labelsController.create)
labelsRouter.put('/:id', labelsController.update)
labelsRouter.delete('/:id', labelsController.delete)

export default labelsRouter
