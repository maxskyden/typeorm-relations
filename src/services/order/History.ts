import AppError from 'src/AppError';
import { IOrderPaginate, IOrdersRepository, ISearchParams } from 'src/models/Order';
import {injectable, inject} from 'tsyringe'

@injectable()
class History{
  constructor(
    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository,
  ) { }
  async execute(id: string, { page, limit }: ISearchParams): Promise<IOrderPaginate>{
    const take = limit;
    const skip = (Number(page) - 1) * take
    const orders = await this.OrdersRepository.history(id, { page, skip, take })
    if (!orders) {
      throw new AppError('Order not found', 404)
    }
    return orders
    }
}
export default History
