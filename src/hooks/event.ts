import { useCallback } from 'react'

import useSyncRef from './sync-ref'

export default function useEvent<T extends (...args: any[]) => any>(handler: T) {
  const $handler = useSyncRef(handler)
  return useCallback((...args: any[]) => $handler.current(...args), [$handler]) as T
}
