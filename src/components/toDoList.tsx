import { ButtonNew } from "./buttonNew"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { useEffect, useState } from "react"

export function ToDoList(){
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [tarefas, setTarefas] = useState<{ nome: string; concluido: boolean; edit: boolean}[]>(() => {
    const storedTarefas = localStorage.getItem("tarefas")
    return storedTarefas ? JSON.parse(storedTarefas) : []
  })

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  function newTask(value: string){
    setTarefas([...tarefas, {
      nome: value,
      concluido: false,
      edit: false,
    }])
  }

  function setStateButtonNew(){
    if(!isInputVisible){
      setIsInputVisible(!isInputVisible);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void{
    if(event.key === 'Enter' && inputValue){
      setIsInputVisible(!isInputVisible);
      newTask(inputValue)
      setInputValue('')
    }
  }

  function handleDelete(index: number){
    const newTarefas = [...tarefas];
    newTarefas.splice(index, 1);
    setTarefas(newTarefas);
  }

  function handleChecked(index: number){
    const newTarefas = [...tarefas]
    newTarefas[index].concluido = !newTarefas[index].concluido;
    setTarefas(newTarefas)
  }

  function handleEdit(index: number){
    const newTarefas = [...tarefas]
    newTarefas[index].edit = !newTarefas[index].edit;
    setTarefas(newTarefas)
  }

  function handleKeyPressEdit(event: React.KeyboardEvent<HTMLInputElement>, index: number): void{
    if(event.key === 'Enter'){
      const newTarefas = [...tarefas];
      newTarefas[index].nome = event.currentTarget.value;
      newTarefas[index].edit = false;
      setTarefas(newTarefas);
    }
  }

  function handleEditChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
    const newTarefas = [...tarefas];
    newTarefas[index].nome = event.target.value;
    setTarefas(newTarefas);
  }

  return (
    <>
    <div className="sectionList">
      <table>
        <tbody>
        {tarefas.map((tarefa, index) => (
          <TableRow key={index}>
            <TableCell>
              <input onChange={() => handleChecked(index)} type="checkbox" className="checkbox"/>
            </TableCell>
            <TableCell>
              {
              tarefa.edit ? <input 
              type="text" value={tarefa.nome} 
              onKeyUp={(e) => handleKeyPressEdit(e, index)}
              onChange={(e) => handleEditChange(e, index)}
              /> 
              : 
              <p style={{ textDecoration: tarefa.concluido ? 'line-through' : 'none' }}>{tarefa.nome}</p>
              }
            </TableCell>
            <TableCell>
              <div className="partButton">
                <button onClick={() => handleEdit(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                </button>
                <button onClick={() => handleDelete(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
        </tbody>
      </table>
    </div>
    <div className="marginBottom"/>
    <ButtonNew onClick={setStateButtonNew}>
        {isInputVisible ? (
        <input
            type="text"
            onChange={handleChange}
            onKeyUp={handleKeyPress}
          />
        ) : (
          <p>New Task</p>
        )}
    </ButtonNew>
    </>
  )
}