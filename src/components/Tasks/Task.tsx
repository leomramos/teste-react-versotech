import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { cn } from '../../lib'

export default function Task({ task }) {
  return (
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
                  'text-gray-600 bg-gray-50 ring-gray-500/10': !task.isComplete,
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
            <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
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
  )
}
