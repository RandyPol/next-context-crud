'use client'

import { useState } from 'react'

function Page() {
  const [task, setTask] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(task)
  }

  return (
    <form onSubmit={onSubmit}>
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
