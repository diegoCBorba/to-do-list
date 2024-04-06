import { ComponentProps } from "react";


interface TableCellProps extends ComponentProps<'td'>{}

export function TableCell(props: TableCellProps){
  return(
    <td className="tableCell" {...props}>{props.children} </td>
  )
}