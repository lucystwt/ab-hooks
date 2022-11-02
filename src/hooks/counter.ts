import { useCallback, useState } from 'react'

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback((n = 1) => setCount((x) => x + n), [])
  const reset = useCallback(() => setCount(initialValue), [initialValue])

  return { count, increment, reset }
}
