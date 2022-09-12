import AppError from 'src/AppError';
import { IShowUser, IUser, IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class Show{
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) { }
  async execute({ id }: IShowUser): Promise<IUser>{
    const user = await this.UsersRepository.findById(id)
    if (!user) {
      throw new AppError('User not found', 404)
    }
    return user
    }
}
export default Show
