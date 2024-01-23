import { createSlice } from '@reduxjs/toolkit'
import { ITask } from '../types'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as ITask[],
  reducers: {
    createTask(state, action) {
      // Create a new task with a unique ID and initial properties
      const newTask = {
        id: crypto.randomUUID(),
        name: action.payload,
        isComplete: false,
        isPriority: false,
        createdAt: Date.now(),
      } as ITask

      // Add the new task to the state
      state.push(newTask)
    },
    updateTask(state, action) {
      // Find the task in the state based on the provided task ID
      const task = state.find(task => task.id === action.payload.id)

      // If the task is found, update its name with the new name from action payload
      if (task) {
        task.name = action.payload.newName
      }
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload)
    },
    toggleTaskComplete(state, action) {
      const task = state.find(task => task.id === action.payload.id)

      if (task) {
        task.isComplete = action.payload.isComplete
      }
    },
    toggleTaskPriority(state, action) {
      const task = state.find(task => task.id === action.payload.id)

      if (task) {
        task.isPriority = action.payload.isPriority
      }
    },
  },
})

export const {
  createTask,
  updateTask,
  deleteTask,
  toggleTaskComplete,
  toggleTaskPriority,
} = taskSlice.actions

export default taskSlice.reducer
