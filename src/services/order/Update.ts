import AppError from 'src/AppError'
import { IUpdateOrder, IOrder, IOrdersRepository } from 'src/models/Order'
import {injectable, inject} from 'tsyringe'

@injectable()
class Update{
  constructor(
    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository
  ) { }
  async execute({id, payment_status}:IUpdateOrder): Promise<IOrder>{
    const order = await this.OrdersRepository.findById(id)
    if(!order){
      throw new AppError('Order not found')
    }
    order.payment_status = payment_status
    await this.OrdersRepository.save(order)
    return order
  }
}
export default Update
