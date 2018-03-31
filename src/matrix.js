// @flow

export type Matrix<T> = Array<T[] | typeof undefined>;

export const get = <T>(
  row: number,
  column: number,
  matrix: Matrix<T>
): T | typeof undefined => {
  const columns = matrix[row];
  if (columns === undefined) {
    return undefined;
  }
  return columns[column];
};

export const getSize = (
  matrix: Matrix<*>
): {| columns: number, rows: number |} => {
  const [firstRow] = matrix;
  return {
    columns: firstRow ? firstRow.length : 0,
    rows: matrix.length
  };
};
