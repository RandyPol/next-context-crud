import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'

function TaskCard({ task }) {
  const router = useRouter()
  const { deleteTask } = useTasks()

  const styleObj = {
    backgroundColor: '#202020',
    color: 'white',
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    const confirm = window.confirm(
      `Are you sure you want to delete ${task.title}?`
    )
    if (confirm) deleteTask(task.id)
  }

  return (
    <div style={styleObj} onClick={() => router.push(`/edit/${task.id}`)}>
      <h1>{`${task.title} ID: ${task.id}`}</h1>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
