import AppError from 'src/AppError'
import { ICreateOrder, IOrder, IOrdersRepository, IRequestOrderCreate } from 'src/models/Order'
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
  async execute({pid, payment_status, user_id}: IRequestOrderCreate): Promise<IOrder>{
    const user = await this.UsersRepository.findById(user_id)
    if (!user) {
      throw new AppError('User not found')
    }
    //const {pid, payment_status} = order_infors
    const order = await this.OrdersRepository.create({
      user,
      pid,
      payment_status
    })
    return order
  }
}
export default Create
