import { useSelector } from 'react-redux'
import { ITask } from '../../types'
import Task from './Task'

// const tasksSorting = (task: ITask, prevTask: ITask) =>
//   task.isComplete
//     ? 1
//     : task.isPriority
//     ? -1
//     : task.createdAt > prevTask.createdAt

export function Tasks() {
  const tasks = useSelector((state: { tasks: ITask[] }) => state.tasks)

  return (
    <ul role='list' className='divide-y divide-gray-100 max-sm:overflow-x-auto'>
      {tasks.map((task: ITask) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}
