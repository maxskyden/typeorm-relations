import { container } from "tsyringe"
import { ILabelsRepository } from "./models/Label"
import { IOrdersRepository } from "./models/Order"
import { IUsersRepository } from "./models/User"
import LabelsRepository from "./typeorm/repositories/LabelsRepository"
import OrdersRepository from "./typeorm/repositories/OrdersRepository"
import UsersRepository from "./typeorm/repositories/UsersRepository"

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)
container.registerSingleton<IOrdersRepository>(
  "OrdersRepository",
  OrdersRepository
)
container.registerSingleton<ILabelsRepository>(
  "LabelsRepository",
  LabelsRepository
)
