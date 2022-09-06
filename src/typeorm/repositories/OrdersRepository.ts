import { PostgresDataSource } from "@config/datasource";
import { count } from "console";
import { ICreateOrder, IHistory, IOrder, IOrderPaginate, IOrdersRepository, ISearch } from "src/models/Order";
import { Repository } from "typeorm";
import Order from "../entities/Order";

class OrdersRepository implements IOrdersRepository{
  private ormRepository: Repository<Order>
  constructor() {
    this.ormRepository = PostgresDataSource.getRepository(Order)
  }

  async findById(id: string): Promise<IOrder | null> {
    const order = await this.ormRepository.findOne({
      where: { id },
      relations: [ 'user' ]
    })
    return order
  }
  async findByName(name: string): Promise<IOrder | null> {
    const order = await this.ormRepository.findOneBy({
      payment_status: name
    })
    return order
  }
  async findAll({ page, skip, take }: ISearch): Promise<IOrderPaginate> {
    const [orders, count] = await this.ormRepository
      .createQueryBuilder().skip(skip).take(take).getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: orders
    }
    return result
  }
  async history(id: string, { page, skip, take }: ISearch): Promise<IOrderPaginate> {

    const [orders, count] = await this.ormRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .where('order.user_id = :id', { id })
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: orders
    }
    return result
  }
  async create({ user, pid, payment_status }: ICreateOrder): Promise<IOrder> {
    const order = this.ormRepository.create({
      user,
      pid,
      payment_status
    })
    await this.ormRepository.save(order)
    return order
  }
  async save(order: IOrder): Promise<IOrder> {
    await this.ormRepository.save(order)
    return order
  }
  async remove(order: IOrder): Promise<void> {
    await this.ormRepository.delete(order)
  }
}
export default OrdersRepository
