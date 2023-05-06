
function TaskCard({ task }) {

  const styleObj = {
    backgroundColor: '#202020',
    color: 'white',
  }

  return (
    <div style={styleObj}>
      <h1>{task.title}</h1>
      <button type="button">Delete</button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
