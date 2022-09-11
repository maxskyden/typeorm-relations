import AppError from 'src/AppError'
import { IDeleteLabel, ILabelsRepository } from 'src/models/Label'
import {injectable, inject} from 'tsyringe'

@injectable()
class Delete{
  constructor(
    @inject('LabelsRepository')
    private LabelsRepository: ILabelsRepository
  ) { }
  async execute({ id }:IDeleteLabel): Promise<void>{
    const label = await this.LabelsRepository.findById(id)
    if(!label){
      throw new AppError('Label not found', 400)
      }
    await this.LabelsRepository.remove(label)
  }
}
export default Delete
