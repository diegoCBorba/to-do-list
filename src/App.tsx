import "./styles/App.css"
import { Header } from "./components/header"
import { ToDoList } from "./components/toDoList"


function App() {
  return (
    <div className="geral">
      <Header/>
      <ToDoList/>
    </div>
  )
}

export default App
