import { ComponentProps } from "react";


interface TableRowProps extends ComponentProps<'tr'>{}

export function TableRow(props: TableRowProps){
  return(
    // <div className="tableRow">
    // </div>
      <tr className="tableRow" {...props}>{props.children}</tr>
  )
}