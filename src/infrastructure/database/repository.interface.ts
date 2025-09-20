export interface FindOptions<T> {
  where?: Partial<T>
  relations?: string[]
  select?: (keyof T)[]
}

export interface Repository<T> {
  findBy(options: FindOptions<T>): Promise<T[]>
  findAll(options?: Omit<FindOptions<T>, 'where'>): Promise<T[]>
  findOneBy(
    where: Partial<T>,
    options?: Omit<FindOptions<T>, 'where'>
  ): Promise<T | null>
  findById(
    id: string,
    options?: Omit<FindOptions<T>, 'where'>
  ): Promise<T | null>
  create(item: Partial<T>): Promise<T>
  update(id: string, item: Partial<T>): Promise<T | null>
  delete(id: string): Promise<boolean>
}
