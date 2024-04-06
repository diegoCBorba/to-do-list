import { ComponentProps } from "react";


interface TableRowProps extends ComponentProps<'tr'>{}

export function TableRow(props: TableRowProps){
  return(
    <div className="tableRow">
      <tr {...props}>{props.children} </tr>
    </div>
  )
}