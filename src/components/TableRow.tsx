interface TableRowType {
  id: number,
  date: string,
  distance: number,
  onDeleteRow: any,
}

const TableRow = ({id, date, distance, onDeleteRow}: TableRowType) => {
  return(
    <div className="table-row">
      <div>{date}</div>
      <div>{distance}</div>
      <button id={id.toString()} onClick={onDeleteRow}>Х</button>
    </div>
  )
}

export default TableRow;