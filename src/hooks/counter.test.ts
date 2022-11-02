import { act, renderHook } from '@testing-library/react'

import useCounter from './counter'


test('should use counter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
  expect(typeof result.current.increment).toBe('function')
})

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})

test('should increment counter from custom initial value', () => {
  const { result } = renderHook(() => useCounter(9000))

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(9001)
})

test('should reset counter to updated initial value', () => {
  let initialValue = 0
  const { result, rerender } = renderHook(() => useCounter(initialValue))

  initialValue = 10
  rerender()

  act(() => {
    result.current.reset()
  })

  expect(result.current.count).toBe(10)
})

test('should reset counter to updated initial value', () => {
  const { result, rerender } = renderHook(({ initialValue }) => useCounter(initialValue), {
    initialProps: { initialValue: 0 }
  })

  rerender({ initialValue: 10 })

  act(() => {
    result.current.reset()
  })

  expect(result.current.count).toBe(10)
})
