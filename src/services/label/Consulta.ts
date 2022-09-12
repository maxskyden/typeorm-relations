import AppError from "src/AppError";
import {
  ISearchParams,
  ILabelPaginate,
  ILabelsRepository,
} from "src/models/Label";
import { injectable, inject } from "tsyringe";

@injectable()
class Consulta {
  constructor(
    @inject("LabelsRepository")
    private LabelsRepository: ILabelsRepository
  ) {}
  async execute(
    id: string,
    { page, limit }: ISearchParams
  ): Promise<ILabelPaginate> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const labels = id
      ? await this.LabelsRepository.consulta(id, { page, skip, take })
      : await this.LabelsRepository.findAll({ page, skip, take });
    if (!labels) {
      throw new AppError("Labels not found", 404);
    }
    return labels;
  }
}
export default Consulta;
