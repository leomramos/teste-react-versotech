import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { cn } from './lib'

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

const tasksSorting = task => (task.isComplete ? 1 : task.isPriority ? -1 : 1)

export default function App() {
  const [task, setTask] = useState('')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl py-12 sm:py-16'>
        <div className='pb-12 sm:pb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            VersoTech To-Do List
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Clique na estrela para marcar como prioridade, clique duas vezes
            para marcar com concluído
          </p>
        </div>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          {stats.map(stat => (
            <div
              key={stat.name}
              className='mx-auto flex max-w-xs flex-col gap-y-4'
            >
              <dt className='text-base leading-7 text-gray-600'>{stat.name}</dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <form
          onSubmit={e => {
            e.preventDefault()
            alert(task)
          }}
          className='my-6 sm:my-8'
        >
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Adicionar tarefa
          </label>
          <div className='mt-2 flex rounded-md shadow-sm'>
            <div className='relative flex flex-grow items-stretch focus-within:z-10'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <ClipboardIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </div>
              <input
                value={task}
                onChange={({ target: { value } }) => setTask(value)}
                className='block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Responder e-mail...'
              />
            </div>
            <button
              type='submit'
              className='relative -ml-px inline-flex items-center bg-indigo-600 hover:bg-indigo-500 gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              <PlusIcon
                className='-ml-0.5 h-5 w-5 text-gray-200'
                aria-hidden='true'
              />
              Adicionar
            </button>
          </div>
        </form>
        <ul
          role='list'
          className='divide-y divide-gray-100 max-sm:overflow-x-auto'
        >
          {tasks.sort(tasksSorting).map(task => (
            <li
              key={task.id}
              className='flex items-center justify-between gap-x-6 py-5'
            >
              <div className='flex items-center gap-x-4'>
                <input
                  defaultChecked={Boolean(task.isComplete)}
                  type='checkbox'
                  className='cursor-pointer h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />

                <div className='min-w-0'>
                  <div className='flex items-start gap-x-3'>
                    <p className='text-sm font-semibold leading-6 text-gray-900'>
                      {task.name}
                    </p>
                    <p
                      className={cn([
                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                        {
                          'text-gray-600 bg-gray-50 ring-gray-500/10':
                            !task.isComplete,
                        },
                        {
                          'text-green-700 bg-green-50 ring-green-600/20':
                            task.isComplete,
                        },
                      ])}
                    >
                      {task.isComplete ? 'Complete' : 'In progress'}
                    </p>
                  </div>
                  <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
                    <p className='truncate'>Created at {task.createdAt}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-none items-center gap-x-4'>
                <a
                  href={`#${task.id}`}
                  className='hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block'
                >
                  View Task<span className='sr-only'>, {task.name}</span>
                </a>
                <Menu as='div' className='relative flex-none'>
                  <Menu.Button className='-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900'>
                    <span className='sr-only'>Open options</span>
                    <EllipsisVerticalIcon
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={cn([
                              'block px-3 py-1 text-sm leading-6 text-gray-900',
                              { 'bg-gray-50': active },
                            ])}
                          >
                            Edit<span className='sr-only'>, {task.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={cn([
                              'block px-3 py-1 text-sm leading-6 text-gray-900',
                              { 'bg-gray-50': active },
                            ])}
                          >
                            Move<span className='sr-only'>, {task.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={cn([
                              'block px-3 py-1 text-sm leading-6 text-gray-900',
                              {
                                'bg-gray-50': active,
                              },
                            ])}
                          >
                            Delete
                            <span className='sr-only'>, {task.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
