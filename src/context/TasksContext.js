'use client'
import { createContext, useContext } from 'react'

const TasksContext = createContext()

const useTasks = () => {
  const tasks = useContext(TasksContext)
  return tasks
}

const TasksProvider = ({ children }) => {
  const tasks = [1, 2, 3, 4, 5]
  return <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
}

export { TasksContext, TasksProvider, useTasks }
