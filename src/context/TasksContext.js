'use client'
import { createContext } from 'react'

const TasksContext = createContext()

const TasksProvider = ({ children }) => {
  const tasks = []
  return <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
}

export { TasksContext, TasksProvider }
