import { IOrder } from "./Order"

export interface ILabel {
  id: string
  name: string
  url: string
  order: IOrder
  created_at: Date
  updated_at: Date
}
export interface ISearch {
  page: number
  skip: number
  take: number
}
export interface ISearchParams {
  page: number
  limit: number
}
export interface ILabelPaginate {
  per_page: number
  total: number
  current_page: number
  data: ILabel[]
}
export interface ICreateLabel {
  order: IOrder
  name: string,
  url: string
}
export interface IRequestCreateLabel{
  order_id: string,
  name: string
  url: string
}
export interface IShowLabel{
  id: string
}
export interface IUpdateLabel{
  id: string
  name: string
  url: string
}
export interface IDeleteLabel{
  id: string
}
export interface IFindByQuery{
  id?: string
}
export interface ILabelsRepository {
  findById(id: string): Promise<ILabel | null>
  findRelationsById(id: string): Promise<ILabel | null>
  findByName(name:string): Promise<ILabel | null>
  findAll({ page, skip, take }: ISearch): Promise<ILabelPaginate>
  consulta(id: string, { page, skip, take }: ISearch): Promise<ILabelPaginate>
  findHistory(id: string, { page, skip, take }: ISearch): Promise<ILabelPaginate>
  create(data: ICreateLabel): Promise<ILabel>
  save(label: ILabel): Promise<ILabel>
  remove(label: ILabel): Promise<void>
}
