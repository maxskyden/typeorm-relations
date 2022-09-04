import AppError from 'src/AppError'
import { ICreateUser, IUser, IUsersRepository } from 'src/models/User'
import {injectable, inject} from 'tsyringe'

@injectable()
class Create{
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) { }
  async execute({ name }: ICreateUser): Promise<IUser>{
    const nameExists = await this.UsersRepository.findByName(name)
    if (nameExists) {
      throw new AppError("Name already exists")
    }
    const user = await this.UsersRepository.create({
      name
    })
    return user
  }
}
export default Create
