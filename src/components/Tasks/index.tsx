import { AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { IFilter, ITask } from '../../types'
import EmptyState from './EmptyState'
import Task from './Task'

const tasksSorting = (a: ITask, b: ITask) => {
  // Sort completed tasks to the bottom
  if (a.isComplete && !b.isComplete) {
    return 1
  } else if (!a.isComplete && b.isComplete) {
    return -1
  }

  // Sort priority tasks to the top
  if (a.isPriority && !b.isPriority) {
    return -1
  } else if (!a.isPriority && b.isPriority) {
    return 1
  }

  // If tasks have the same completion status and priority, sort them based on their creation timestamp
  return b.createdAt - a.createdAt
}

export function Tasks({ listFilter }: { listFilter: IFilter }) {
  // Select all tasks from the store
  const tasks = useSelector((state: { tasks: ITask[] }) => state.tasks)
  const filteredList = useMemo(() => {
    const usableTasks = [...tasks]

    if (!listFilter) return usableTasks

    return usableTasks.filter(
      task => task[listFilter.name] === listFilter.value
    )
  }, [tasks, listFilter])

  return (
    <ul role='list' className='divide-y divide-gray-100 max-sm:overflow-x-auto'>
      {filteredList.length === 0 ? (
        <EmptyState />
      ) : (
        <AnimatePresence>
          {filteredList.sort(tasksSorting).map((task: ITask) => (
            <Task key={task.id} task={task} />
          ))}
        </AnimatePresence>
      )}
    </ul>
  )
}
