import { useState } from "react"
import { NavBar, TaskForm, BasicModal, TaskList } from "./components";
// import { Task } from "./api";

// const task = new Task()

export default function App(){
  const [showModal, setShowModal] = useState(false)
  const openCloseModal = () => setShowModal(!showModal)

  // const data = task.obtain()

  return (
    <div>
      <NavBar openCloseModal={openCloseModal}/>
      <TaskList/>
      <BasicModal show={showModal} close={openCloseModal} title="Nueva tarea">
        <TaskForm close={openCloseModal}/>
      </BasicModal>
    </div>
  )
}