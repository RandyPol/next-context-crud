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
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
    },
  ]
  return (
    <TasksContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext, TasksProvider, useTasks }
