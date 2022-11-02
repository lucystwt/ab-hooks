import { useLayoutEffect } from 'react'
import { useRef } from 'react'

export default function useSyncRef<T>(value: T) {
  const ref = useRef(value)

  useLayoutEffect(() => {
    ref.current = value
  }, [value])

  return ref
}
