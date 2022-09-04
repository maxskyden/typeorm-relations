import AppError from 'src/AppError'
import { ICreateOrder, IOrder, IOrdersRepository } from 'src/models/Order'
import { IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class Create{
  constructor(
    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository,

    @inject('UsersRepository')
    private UsersRepository: IUsersRepository,
  ) { }
  async execute({pid, payment_status, user_id }: ICreateOrder): Promise<IOrder>{
    const userExists = await this.UsersRepository.findById(user_id as string)
    if (!userExists) {
      throw new AppError('User not found')
    }
    const order = await this.OrdersRepository.create({
        pid,
        payment_status,
        user: userExists
    })
    return order
  }
}
export default Create
