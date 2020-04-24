import React, { useState, useEffect, useRef } from 'react'

export const Count = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        ストップ
      </button>
    </div>
  )
}

// DOMを操作したい場合や
// ↑のようにクロージャー内で宣言された値へアクセスしたい場合
