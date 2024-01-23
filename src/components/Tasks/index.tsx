import Task from './Task'

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

const tasksSorting = task => (task.isComplete ? 1 : task.isPriority ? -1 : 1)

export function Tasks() {
  return (
    <ul role='list' className='divide-y divide-gray-100 max-sm:overflow-x-auto'>
      {tasks.sort(tasksSorting).map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}
