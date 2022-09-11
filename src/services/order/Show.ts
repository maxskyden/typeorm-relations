import AppError from 'src/AppError';
import { IShowOrder, IOrder, IOrdersRepository } from 'src/models/Order'
import {injectable, inject} from 'tsyringe'

@injectable()
class Show{
  constructor(
    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository
  ) { }
  async execute({ id }: IShowOrder): Promise<IOrder>{
    const order = await this.OrdersRepository.findRelationsById(id)
    if (!order) {
      throw new AppError('Order not found', 404)
    }
    return order
    }
}
export default Show
