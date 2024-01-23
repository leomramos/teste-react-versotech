import { Form, Stats, Tasks } from './components'

export default function App() {
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

        <Stats />

        <Form />

        <Tasks />
      </div>
    </div>
  )
}
