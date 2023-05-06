import { useRouter } from 'next/navigation'

function TaskCard({ task }) {
  const router = useRouter()

  const styleObj = {
    backgroundColor: '#202020',
    color: 'white',
  }

  return (
    <div style={styleObj} onClick={() => router.push(`/edit/${task.id}`)}>
      <h1>{`${task.title} ID: ${task.id}`}</h1>
      <button type="button">Delete</button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
