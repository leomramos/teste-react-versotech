const tasks = [
  {
    id: 1,
    name: 'First Task',
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 2,
    name: 'Second Task',
    isPriority: true,
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 3,
    name: 'Third Task',
    status: 'In progress',
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 4,
    name: 'Fourth Task',
    isComplete: true,
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 5,
    name: 'Fifth Task',
    isComplete: true,
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 11,
    name: 'First Task',
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 21,
    name: 'Second Task',
    isPriority: true,
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 31,
    name: 'Third Task',
    status: 'In progress',
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 41,
    name: 'Fourth Task',
    isComplete: true,
    createdAt: '2024-01-01T00:00Z',
  },
  {
    id: 51,
    name: 'Fifth Task',
    isComplete: true,
    createdAt: '2024-01-01T00:00Z',
  },
]

const stats = [
  { name: 'Total de tarefas', value: tasks.length },
  {
    name: 'Tarefas concluídas',
    value: tasks.filter(task => task.isComplete).length,
  },
  {
    name: 'Não concluídas',
    value: tasks.filter(task => !task.isComplete).length,
  },
]

export function Stats() {
  return (
    <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
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
