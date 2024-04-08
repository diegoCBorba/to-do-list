import { ComponentProps } from "react";


interface ButtonNewProps extends ComponentProps<'button'>{}

export function ButtonNew(props: ButtonNewProps){
  

  return(
    <div className="buttonNew">
      <button {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        {props.children}
      </button>
    </div>
  )
}