import { act, renderHook } from '@testing-library/react'
import { useState } from 'react'

import useSyncRef from './sync-ref'


test('use sync ref', () => {
  const { result: { current: [testValue, setTestValue] } } = renderHook(() => useState(25))
  const { result } = renderHook(() => useSyncRef(testValue))

  expect(result.current.current).toBe(testValue)

  act(() => {
    setTestValue(33)
  })

  expect(result.current.current).toBe(testValue)
})
