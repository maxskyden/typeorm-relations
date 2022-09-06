import { PostgresDataSource } from "@config/datasource";
import { In, Repository } from "typeorm";
import { ICreateUser, IFindUsers, ISearch, IUser, IUserPaginate, IUsersRepository } from "src/models/User";
import User from "../entities/User";
import Order from "../entities/Order";

class UsersRepository implements IUsersRepository{
  private ormRepository: Repository<User>
  constructor() {
    this.ormRepository = PostgresDataSource.getRepository(User)
  }
  async findAllByIds(users: IFindUsers[]): Promise<IUser[]> {
    const userIds = users.map(user => user.id)
    const existentUsers = await this.ormRepository.find(
      {
        where: {
          id: In(userIds)
        }
      }
    )
    return existentUsers
  }
  async history(id: string): Promise<IUser[]> {
    const user = await this.ormRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect(
        "user.orders",
        "order",
      )
      .where({ id })
      .getMany()
      return user
  }
  async findById(id: string): Promise<IUser | null> {
    const user = await this.ormRepository.findOneBy({
      id
    })
    return user
  }
  async findByName(name: string): Promise<IUser | null> {
    const user = await this.ormRepository.findOneBy({
       name
    })
    return user
  }
  async findAll({ page, skip, take }: ISearch): Promise<IUserPaginate> {
    const [users, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users
    }
    return result
  }
  async create({name}: ICreateUser): Promise<IUser> {
    const user = this.ormRepository.create({ name })
    await this.ormRepository.save(user)
    return user
  }
  async save(user: IUser): Promise<IUser> {
    await this.ormRepository.save(user)
    return user
  }
  async remove(user: IUser): Promise<void> {
      await this.ormRepository.delete(user)
  }
}
export default UsersRepository
