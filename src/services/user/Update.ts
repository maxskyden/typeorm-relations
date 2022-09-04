import AppError from 'src/AppError'
import { IUpdateUser, IUser, IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class Update{
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) { }
  async execute({id, name}:IUpdateUser): Promise<IUser>{
    const user = await this.UsersRepository.findById(id)
    if(!user){
      throw new AppError('User not found')
    }
    user.name = name
    await this.UsersRepository.save(user)
    return user
  }
}
export default Update
