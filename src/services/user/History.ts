import AppError from 'src/AppError';
import { IHistory, IUser, IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class History{
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) { }
  async execute({ id }: IHistory): Promise<IUser[]>{
    const history = await this.UsersRepository.history(id)
    if (!history) {
      throw new AppError('User not found', 404)
    }
    return history
    }
}
export default History
