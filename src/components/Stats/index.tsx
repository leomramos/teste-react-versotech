import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { cn } from '../../lib'
import { IFilter, ITask } from '../../types'

export function Stats({
  listFilter,
  setListFilter,
}: {
  listFilter: IFilter
  setListFilter: React.Dispatch<React.SetStateAction<IFilter>>
}) {
  // Memoizes the function to prevent unnecessary re-creation
  const isSelectedFilter = useCallback(
    // Determines whether the provided filter is the currently selected filter.
    (filter: IFilter) => JSON.stringify(listFilter) === JSON.stringify(filter),
    [listFilter]
  )

  // Select all tasks from the store
  const tasks = useSelector((state: { tasks: ITask[] }) => state.tasks)

  // Memoizes the stats based on the tasks
  const stats = useMemo(
    () => [
      {
        name: 'Total de tarefas',
        value: tasks.length,
        filter: null as IFilter,
      },
      {
        name: 'Tarefas concluídas',
        value: tasks.filter((task: ITask) => task.isComplete).length,
        filter: {
          name: 'isComplete',
          value: true,
        } as IFilter,
      },
      {
        name: 'Não concluídas',
        value: tasks.filter((task: ITask) => !task.isComplete).length,
        filter: {
          name: 'isComplete',
          value: false,
        } as IFilter,
      },
    ],
    [tasks]
  )

  return (
    <dl className='grid gap-x-8 gap-y-16 text-center grid-cols-3'>
      {stats.map(stat => (
        <div
          key={stat.name}
          className={cn([
            'mx-auto flex max-w-xs flex-col gap-y-4 cursor-pointer',
            {
              'opacity-50': listFilter && !isSelectedFilter(stat.filter),
            },
          ])}
          onClick={() =>
            setListFilter(isSelectedFilter(stat.filter) ? null : stat.filter)
          }
        >
          <dt className='text-base leading-7 text-gray-600'>{stat.name}</dt>
          <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
