import { useState } from 'react'
import { Form, Stats, Tasks } from './components'
import { IFilter } from './types'

export default function App() {
  const [listFilter, setListFilter] = useState<IFilter>(null)

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl py-12 sm:py-16'>
        <div className='pb-12 sm:pb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            VersoTech To-Do List
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Clique na estrela para marcar como prioridade. Clique duas vezes
            para marcar a tarefa como concluída. Clique no número de tarefas
            para exibir apenas a filtragem selecionada.
          </p>
        </div>

        <Stats listFilter={listFilter} setListFilter={setListFilter} />

        <Form />

        <Tasks listFilter={listFilter} />
      </div>
    </div>
  )
}
