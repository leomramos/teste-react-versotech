import { PlusIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../../store/taskSlice'

export function Form() {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Check if the task is empty and return if true
    if (task === '') return

    dispatch(createTask(task))

    // Clear the task input field after dispatching the action
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit} className='my-6 sm:my-8'>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
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
            className='block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
            placeholder='Nova tarefa'
          />
        </div>
        <button
          type='submit'
          disabled={!task}
          className='relative -ml-px inline-flex items-center bg-blue-600 hover:bg-blue-500 gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:pointer-events-none'
        >
          <PlusIcon
            className='-ml-0.5 h-5 w-5 text-gray-200'
            aria-hidden='true'
          />
          Adicionar
        </button>
      </div>
    </form>
  )
}
