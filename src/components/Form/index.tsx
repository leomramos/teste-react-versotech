import { PlusIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function Form() {
  const [task, setTask] = useState('')

  return (
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
  )
}
