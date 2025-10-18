'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface CounterProps {
  className?: string
}

export function Counter({ className }: CounterProps) {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className={cn('flex flex-col items-center space-y-6', className)}>
      <div className="text-6xl font-bold text-gray-800 dark:text-gray-200">
        {count}
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          aria-label="Decrement counter"
        >
          -
        </button>
        
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
          aria-label="Reset counter"
        >
          Reset
        </button>
        
        <button
          onClick={increment}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          aria-label="Increment counter"
        >
          +
        </button>
      </div>
    </div>
  )
}