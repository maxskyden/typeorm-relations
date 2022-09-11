import AppError from 'src/AppError'
import { IUpdateLabel, ILabel, ILabelsRepository } from 'src/models/Label'
import {injectable, inject} from 'tsyringe'

@injectable()
class Update{
  constructor(
    @inject('LabelsRepository')
    private LabelsRepository: ILabelsRepository
  ) { }
  async execute({id, name, url}:IUpdateLabel): Promise<ILabel>{
    const label = await this.LabelsRepository.findById(id)
    if(!label){
      throw new AppError('Label not found')
    }
    label.name = name
    label.url = url
    await this.LabelsRepository.save(label)
    return label
  }
}
export default Update
