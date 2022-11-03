import { useLayoutEffect } from 'react'

export default function useTitle(title: string) {
  useLayoutEffect(() => {
    document.title = title
  }, [title])
}
