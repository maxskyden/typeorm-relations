import { Router } from "express";
import UsersController from "src/controllers/UsersController";

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.get('/', usersController.index)
usersRouter.get('/:id', usersController.show)
usersRouter.get('/:id/history', usersController.history)
usersRouter.post('/', usersController.create)
usersRouter.put('/:id', usersController.update)
usersRouter.delete('/:id', usersController.delete)

export default usersRouter
