'use client'
import { useState, useEffect } from 'react'
import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'

function Page({ params }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()

  console.log(task)

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      updateTask(params.id, task)
    } else {
      createTask(task)
    }
    router.push('/')
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => {
        return task.id === params.id
      })
      if (taskFound) {
        setTask(taskFound)
      }
    }
  }, [params.id, tasks])

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Write a title"
        onChange={handleChange}
        value={task?.title}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
        value={task?.description}
      />
      <button type="submit">Create</button>
    </form>
  )
}

export default Page
