'use client'
import { createContext, useContext } from 'react'

const TasksContext = createContext()

const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error(`useTasks must be used within a TasksProvider`)
  }

  return context
}

const TasksProvider = ({ children }) => {
  const tasks = [1, 2, 3, 4, 5]
  return <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
}

export { TasksContext, TasksProvider, useTasks }
