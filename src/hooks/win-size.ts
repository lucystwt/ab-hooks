import { useEffect, useState } from 'react'

export default function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  useEffect(() => {
    const resizeHandler = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return size
}
