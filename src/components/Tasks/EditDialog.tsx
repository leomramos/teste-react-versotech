import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function EditDialog({
  initialName,
  isOpen,
  closeDialog,
  saveEdit,
}: {
  initialName: string
  isOpen: boolean
  closeDialog: () => void
  saveEdit: (newName: string) => void
}) {
  const [newName, setNewName] = useState(initialName)

  const handleSave = () => {
    if (newName !== '' && newName.length <= 50) {
      saveEdit(newName)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Alterar tarefa
                </Dialog.Title>
                <div className='mt-4'>
                  <input
                    value={newName}
                    maxLength={50}
                    onChange={({ target: { value } }) => setNewName(value)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Responder e-mail...'
                  />
                </div>
                <div className='mt-4'>
                  <button
                    type='button'
                    disabled={newName === '' && newName.length <= 50}
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
                    onClick={handleSave}
                  >
                    Salvar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
