import { act, renderHook } from '@testing-library/react'

import useCounter from './counter'
import useEvent from './event'

test('use event', () => {
  const { result: counter } = renderHook(() => useCounter(4))
  const { result: $increment } = renderHook(() => useEvent(counter.current.increment))
  const { result: $reset } = renderHook(() => useEvent(counter.current.reset))

  act(() => {
    $increment.current(33)
  })


  expect(counter.current.count).toBe(37)

  act(() => {
    $reset.current()
  })

  expect(counter.current.count).toBe(4)
})
