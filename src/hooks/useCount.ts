import { useCallback, useEffect, useState } from "react"

export default function useCount() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count")
    if (storedCount) {
      return parseInt(storedCount)
    }
    return 0
  })

  const onIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const onDecrement = useCallback(() => {
    setCount((prev) => Math.max(prev - 1, 0))
  }, [])

  useEffect(() => {
    localStorage.setItem("count", count.toString())
  }, [count])

  return { count, onIncrement, onDecrement }
}
