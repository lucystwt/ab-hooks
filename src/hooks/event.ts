import { useCallback } from 'react'

import useSyncRef from './sync-ref'

export default function useEvent<
  T extends ((...args: any[]) => any) | undefined
>(handler: T) {
  const $handler = useSyncRef(handler)
  const memoHandler = useCallback(
    (...args: any[]) => $handler.current && $handler.current(...args),
    [$handler]
  ) as T
  return memoHandler
}
