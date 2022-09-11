import AppError from 'src/AppError';
import { ISearchParams, ILabelPaginate, ILabelsRepository } from 'src/models/Label'
import {injectable, inject} from 'tsyringe'

@injectable()
class List{
  constructor(
    @inject('LabelsRepository')
    private LabelsRepository: ILabelsRepository
  ) { }
  async execute({ page, limit }: ISearchParams): Promise<ILabelPaginate>{
    const take = limit;
    const skip = (Number(page) - 1) * take
    const labels = await this.LabelsRepository.findAll({ page, skip, take })
    if (!labels) {
      throw new AppError('Labels not found', 404)
    }
    return labels
  }
}
export default List
