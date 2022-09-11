import AppError from 'src/AppError'
import { ILabel, ILabelsRepository, IRequestCreateLabel } from 'src/models/Label'
import { IOrdersRepository } from 'src/models/Order'
import {injectable, inject} from 'tsyringe'

@injectable()
class Create{
  constructor(
    @inject('LabelsRepository')
    private LabelsRepository: ILabelsRepository,

    @inject('OrdersRepository')
    private OrdersRepository: IOrdersRepository,
  ) { }
  async execute({ order_id, name, url }: IRequestCreateLabel): Promise<ILabel>{
    try {
      const order = await this.OrdersRepository.findById(order_id)
      if(!order) {
        throw new AppError('Order not found', 404)
      }
      const label = await this.LabelsRepository.create({
        order,
        name,
        url,
      })
      return label
    } catch (error) {
      throw new AppError('Order not found', 400)
    }

  }
}
export default Create
