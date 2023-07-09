export interface Database {
  query(query: string, replacements: (number|string|boolean)[]): Promise<any>
}
