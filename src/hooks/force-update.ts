import { useReducer } from 'react'

export default function useForceUpdate() {
  const [, forceUpdate] = useReducer((state) => !state, false)
  return forceUpdate
}
