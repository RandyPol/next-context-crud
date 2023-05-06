'use client'
import { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const TasksContext = createContext()

const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error(`useTasks must be used within a TasksProvider`)
  }

  return context
}

const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([
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
  ])

  const createTask = ({ title, description }) =>
    setTask((prev) => [
      ...prev,
      {
        id: uuid(),
        title,
        description,
      },
    ])

  const deleteTask = (id) => {
    setTask((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext, TasksProvider, useTasks }
