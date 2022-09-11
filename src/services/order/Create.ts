import AppError from 'src/AppError'
import { IOrder, IOrdersRepository, IRequestCreateOrder } from 'src/models/Order'
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
  async execute({user_id, pid , payment_status }: IRequestCreateOrder): Promise<IOrder>{
    const user = await this.UsersRepository.findById(user_id)
    if (!user) {
      throw new AppError('User not found')
    }
    const order = await this.OrdersRepository.create({
      user: user,
      pid,
      payment_status
    })
    return order
  }
}
export default Create
