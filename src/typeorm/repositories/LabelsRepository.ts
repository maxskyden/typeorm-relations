import { PostgresDataSource } from "@config/datasource";
import {
  ICreateLabel,
  ILabelPaginate,
  ILabelsRepository,
  ISearch,
} from "src/models/Label";
import { Repository } from "typeorm";
import Label from "../entities/Label";

class LabelsRepository implements ILabelsRepository {
  private ormRepository: Repository<Label>;
  constructor() {
    this.ormRepository = PostgresDataSource.getRepository(Label);
  }

  async findById(id: string): Promise<Label | null> {
    const label = await this.ormRepository.findOneBy({ id });
    return label;
  }
  async findRelationsById(id: string): Promise<Label | null> {
    const label = await this.ormRepository.findOne({
      where: { id },
      relations: ["order"],
    });
    return label;
  }
  async findByName(name: string): Promise<Label | null> {
    const label = await this.ormRepository.findOneBy({ name });
    return label;
  }
  async findAll({ page, skip, take }: ISearch): Promise<ILabelPaginate> {
    const [labels, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: labels,
    };
    return result;
  }
  async consulta(
    id: string,
    { page, skip, take }: ISearch
  ): Promise<ILabelPaginate> {
    const [labels, count] = await this.ormRepository
      .createQueryBuilder("label")
      .leftJoinAndSelect("label.order", "order")
      .where("label.order_id = :id", { id })
      .skip(skip)
      .take(take)
      .getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: labels,
    };
    return result;
  }
  async findHistory(
    id: string,
    { page, skip, take }: ISearch
  ): Promise<ILabelPaginate> {
    const [labels, count] = await this.ormRepository
      .createQueryBuilder("label")
      .leftJoinAndSelect("label.order", "order")
      .where("label.order_id = :id", { id })
      .skip(skip)
      .take(take)
      .getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: labels,
    };
    return result;
  }
  async create({ order, name, url }: ICreateLabel): Promise<Label> {
    const label = this.ormRepository.create({
      order,
      name,
      url,
    });
    await this.ormRepository.save(label);
    return label;
  }
  async save(label: Label): Promise<Label> {
    await this.ormRepository.save(label);
    return label;
  }
  async remove(label: Label): Promise<void> {
    await this.ormRepository.remove(label);
  }
}
export default LabelsRepository;
