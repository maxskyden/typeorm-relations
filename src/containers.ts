import { container } from "tsyringe"
import { IOrdersRepository } from "./models/Order"
import { IUsersRepository } from "./models/User"
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
