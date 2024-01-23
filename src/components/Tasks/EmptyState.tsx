import { ClipboardIcon } from '@heroicons/react/24/outline'

export default function EmptyState() {
  return (
    <div className='text-center py-5'>
      <ClipboardIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h3 className='mt-2 text-sm font-semibold text-gray-900'>
        Nenhuma tarefa encontrada
      </h3>
      <p className='mt-1 text-sm text-gray-500'>
        Adicione seus afazeres usando o campo acima
      </p>
    </div>
  )
}
