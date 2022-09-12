import { IOrder } from "./Order"

export interface IUser {
  id: string
  name: string
  created_at: Date
  updated_at: Date
}
export interface IFindUsers{
  id: string
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
export interface IUserPaginate {
  per_page: number
  total: number
  current_page: number
  data: IUser[]
}
export interface ICreateUser {
  name: string,
}
export interface IShowUser{
  id: string
}
export interface IUpdateUser{
  id: string
  name: string
}
export interface IDeleteUser{
  id: string
}
export interface IHistory{
  id: string
}
export interface IUsersRepository {
  findAllByIds(users: IFindUsers[]): Promise<IUser[]>;
  history(id: string ): Promise<IUser[]>
  findById(id: string): Promise<IUser | null>
  findByName(name:string): Promise<IUser | null>
  findAll({page, skip, take}: ISearch): Promise<IUserPaginate>
  create(data: ICreateUser): Promise<IUser>
  save(user: IUser): Promise<IUser>
  remove(user: IUser): Promise<void>
}
