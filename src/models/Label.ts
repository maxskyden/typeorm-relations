export interface ILabel {
  id: string
  name: string
  url: string
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
  pid: string,
  payment_status: string

  user_id?: string
}
export interface IShowLabelILabel{
  id: string
}
export interface IUpdateLabelILabel{
  id: string
  payment_status: string
}
export interface IDeleteLabelILabel{
  id: string
}
export interface ILabelsRepository {
  findById(id: string): Promise<ILabel | null>
  findByName(name:string): Promise<ILabel | null>
  findAll({page, skip, take}: ISearch): Promise<ILabelPaginate>
  create(data: ICreateLabel): Promise<ILabel>
  save(label: ILabel): Promise<ILabel>
  remove(label: ILabel): Promise<void>
}
