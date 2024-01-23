import { PencilIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cn } from '../../lib'
import {
  deleteTask,
  toggleTaskComplete,
  toggleTaskPriority,
  updateTask,
} from '../../store/taskSlice'
import { ITask } from '../../types'
import DeleteDialog from './DeleteDialog'
import EditDialog from './EditDialog'

export default function Task({ task }: { task: ITask }) {
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  const handleEdit = () => {
    setEditing(true)
  }

  const saveEdit = (newName: string) => {
    setEditing(false)

    dispatch(updateTask({ id: task.id, newName }))
  }

  const handleDelete = () => {
    setDeleting(false)
    dispatch(deleteTask(task.id))
  }

  const handleComplete = (isComplete: boolean) => {
    dispatch(toggleTaskComplete({ id: task.id, isComplete }))
  }

  const handlePriority = (isPriority: boolean) => {
    dispatch(toggleTaskPriority({ id: task.id, isPriority }))
  }

  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex items-center justify-between gap-x-6 py-5 bg-white'
    >
      <div
        className='flex items-center gap-x-4'
        onDoubleClick={() => handleComplete(!task.isComplete)}
      >
        <input
          type='checkbox'
          checked={task.isComplete}
          onChange={({ target: { checked } }) => handleComplete(checked)}
          className='cursor-pointer h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
        />

        <div className='min-w-0'>
          <div className='flex items-start gap-x-3'>
            <p
              className={cn([
                'text-sm font-semibold leading-6 text-gray-900',
                { 'line-through': task.isComplete },
              ])}
            >
              {task.name}
            </p>
          </div>
          <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
            <p className='truncate'>
              Criado em {new Date(task.createdAt).toLocaleString()}
            </p>
            <svg viewBox='0 0 2 2' className='h-0.5 w-0.5 fill-current'>
              <circle cx={1} cy={1} r={1} />
            </svg>
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
              {task.isComplete ? 'Completo' : 'Em progresso'}
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-none items-center gap-x-4'>
        <label>
          <input
            id='priority'
            type='checkbox'
            checked={task.isPriority}
            onChange={({ target: { checked } }) => handlePriority(checked)}
            className='hidden peer'
          />
          <span className='sr-only'>Marcar {task.name} como prioridade</span>
          <StarIcon
            className='h-6 w-6 peer-checked:fill-blue-600 cursor-pointer stroke-blue-600'
            aria-hidden='true'
          />
        </label>
        <div className='flex flex-none items-center gap-x-1'>
          <button
            onClick={handleEdit}
            className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            <span className='sr-only'>Editar {task.name}</span>
            <PencilIcon className='h-5 w-5' aria-hidden='true' />
          </button>
          <button
            onClick={() => setDeleting(true)}
            className='rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-600/20 bg-red-500 hover:bg-red-400'
          >
            <span className='sr-only'>Deletar {task.name}</span>
            <TrashIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      </div>

      <DeleteDialog
        taskName={task.name}
        isOpen={isDeleting}
        handleDelete={handleDelete}
        handleCancel={() => setDeleting(false)}
      />
      <EditDialog
        initialName={task.name}
        isOpen={isEditing}
        handleCancel={() => setEditing(false)}
        saveEdit={saveEdit}
      />
    </motion.li>
  )
}
