import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ITask } from '../../types'

export function Stats() {
  const tasks = useSelector((state: { tasks: ITask[] }) => state.tasks)

  const stats = useMemo(
    () => [
      { name: 'Total de tarefas', value: tasks.length },
      {
        name: 'Tarefas concluídas',
        value: tasks.filter((task: ITask) => task.isComplete).length,
      },
      {
        name: 'Não concluídas',
        value: tasks.filter((task: ITask) => !task.isComplete).length,
      },
    ],
    [tasks]
  )

  return (
    <dl className='grid gap-x-8 gap-y-16 text-center grid-cols-3'>
      {stats.map(stat => (
        <div key={stat.name} className='mx-auto flex max-w-xs flex-col gap-y-4'>
          <dt className='text-base leading-7 text-gray-600'>{stat.name}</dt>
          <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
