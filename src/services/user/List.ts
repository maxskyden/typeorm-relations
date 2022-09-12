import { ISearchParams, IUserPaginate, IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class List{
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) { }
  async execute({ page, limit }: ISearchParams): Promise<IUserPaginate>{
    const take = limit;
    const skip = (Number(page) - 1) * take
    const users = await this.UsersRepository.findAll({ page, skip, take })
    return users
  }
}
export default List
