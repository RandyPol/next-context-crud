'use client'
import { useState } from 'react'
import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'

function Page() {
  const [task, setTask] = useState()
  const { createTask } = useTasks()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Write a title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  )
}

export default Page
