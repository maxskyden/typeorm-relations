import { IUser } from "./User"

export interface IOrder {
  id: string
  pid: string
  payment_status: string
  user: IUser
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
export interface IOrderPaginate {
  per_page: number
  total: number
  current_page: number
  data: IOrder[]
}
export interface IOrderCreate {
  pid: string
  payment_status: string
}
export interface ICreateOrder {
  user?: IUser
  pid: string
  payment_status: string
}
export interface IRequestOrderCreate extends ICreateOrder{
  user_id: string
}
export interface IShowOrder{
  id: string
}
export interface IUpdateOrder{
  id: string
  payment_status: string
}
export interface IDeleteOrder{
  id: string
}
export interface IHistory{
  id: string
  search: ISearch
}
export interface IOrdersRepository {
  findById(id: string): Promise<IOrder | null>
  findByName(name:string): Promise<IOrder | null>
  findAll({ page, skip, take }: ISearch): Promise<IOrderPaginate>
  history(id:string, { page, skip, take }: ISearch):Promise<IOrderPaginate>
  create(data: ICreateOrder): Promise<IOrder>
  save(order: IOrder): Promise<IOrder>
  remove(order: IOrder): Promise<void>
}
