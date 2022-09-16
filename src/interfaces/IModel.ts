export interface IModel<T> {
  create(data: T): Promise<T>
  read(): Promise<T[]>
  readOne(data: string): Promise<T | null>
  update(data: string, obj: T): Promise<T | null>
  delete(data: string): Promise<T | null>
}