'use client'
import { useEffect } from 'react'
import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    const { title, description } = data
    if (params.id) {
      updateTask(params.id, {
        title,
        description,
      })
      toast.success('Task updated successfully')
    } else {
      createTask({
        title,
        description,
      })
      toast.success('Task created successfully')
    }
    router.push('/')
  })

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => {
        return task.id === params.id
      })
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  }, [params.id, tasks, setValue])

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Write a title"
        {...register('title', { required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <textarea
        placeholder="Write a description"
        {...register('description', { required: true })}
      />
      {errors.description && <span>This field is required</span>}
      <button type="submit">Create</button>
    </form>
  )
}

export default Page
