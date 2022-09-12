import AppError from 'src/AppError';
import { ILabelPaginate, ILabelsRepository, ISearchParams } from 'src/models/Label';
import {injectable, inject} from 'tsyringe'

@injectable()
class History{
  constructor(
    @inject('LabelsRepository')
    private LabelsRepository: ILabelsRepository,
  ) { }
  async execute(id: string, { page, limit }: ISearchParams): Promise<ILabelPaginate>{
    const take = limit;
    const skip = (Number(page) - 1) * take
    try {
      const labels = await this.LabelsRepository.findHistory(id, { page, skip, take })
      return labels
    } catch (error) {
      throw new AppError('Label not found', 400)
    }
  }
}
export default History
