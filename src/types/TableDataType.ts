export type TableDataType<ColumnNameUnion extends string, CellType> = {
  [key in ColumnNameUnion]: CellType
}
