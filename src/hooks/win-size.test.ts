import { renderHook } from '@testing-library/react'

import useWinSize from './win-size'

test('use win size', () => {
  const { result } = renderHook(() => useWinSize())

  expect(result.current.width).toBe(0)
  expect(result.current.height).toBe(0)
})
