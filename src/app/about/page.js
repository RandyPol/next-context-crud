'use client'
import { TasksContext, useTasks } from '../../context/TasksContext'

function Page() {
  const tasks = useTasks()
  console.log(tasks)
  return (
    <>
      <div>About Page</div>
      <h1>{tasks.length}</h1>
    </>
  )
}

export default Page
