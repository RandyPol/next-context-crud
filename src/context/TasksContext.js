'use client'
import { createContext, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { useLocalstorage } from '@/hooks/useLocalstorage'

const TasksContext = createContext()

const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error(`useTasks must be used within a TasksProvider`)
  }

  return context
}

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalstorage('tasks', [])

  const createTask = ({ title, description }) =>
    setTasks((prev) => [
      ...prev,
      {
        id: uuid(),
        title,
        description,
      },
    ])

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const updateTask = (id, { title, description }) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
            description,
          }
        }
        return task
      })
    )
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext, TasksProvider, useTasks }
