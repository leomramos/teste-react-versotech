export type ITask = {
  id: string
  name: string
  isComplete: boolean
  isPriority: boolean
  createdAt: number
}

export type IFilter = null | {
  name: 'isComplete' | 'isPriority'
  value: boolean
}
