import AppError from 'src/AppError';
import { IShowLabel, ILabel, ILabelsRepository } from 'src/models/Label'
import {injectable, inject} from 'tsyringe'

@injectable()
class Relation{
  constructor(
    @inject('LabelsRepository')
    private LabelsRepository: ILabelsRepository
  ) { }
  async execute({ id }: IShowLabel): Promise<ILabel>{
    const label = await this.LabelsRepository.findRelationsById(id)
    if(!label){
      throw new AppError('Label not found', 404)
    }
    return label
  }
}
export default Relation
