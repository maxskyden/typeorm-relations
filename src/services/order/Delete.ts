import AppError from 'src/AppError'
import { IDeleteOrder, IOrdersRepository } from 'src/models/Order'
import {injectable, inject} from 'tsyringe'

@injectable()
class Delete{
  constructor(
    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository
  ) { }
  async execute({ id }:IDeleteOrder): Promise<void>{
    const order = await this.OrdersRepository.findById(id)
    if(!order){
      throw new AppError('Order not found', 404)
      }
    await this.OrdersRepository.remove(order)
  }
}
export default Delete
