'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Counter</h2>
        <p className="text-5xl font-bold text-blue-600">{count}</p>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          Increment
        </button>
      </div>
    </div>
  )
}