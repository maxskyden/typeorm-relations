import { ISearchParams, IOrderPaginate, IOrdersRepository } from 'src/models/Order'
import {injectable, inject} from 'tsyringe'

@injectable()
class List{
  constructor(
    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository
  ) { }
  async execute({ page, limit }: ISearchParams): Promise<IOrderPaginate>{
    const take = limit;
    const skip = (Number(page) - 1) * take
    const orders = await this.OrdersRepository.findAll({ page, skip, take })
    return orders
  }
}
export default List
