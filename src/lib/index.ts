import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combines multiple sets of class values and returns a merged class string
export const cn = (classes: ClassValue[]) => twMerge(clsx(classes))
