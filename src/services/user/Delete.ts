import AppError from 'src/AppError'
import { IDeleteUser, IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class Delete{
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) { }
  async execute({ id }:IDeleteUser): Promise<void>{
    const user = await this.UsersRepository.findById(id)
    if(!user){
      throw new AppError('User not found', 404)
      }
    await this.UsersRepository.remove(user)
  }
}
export default Delete
