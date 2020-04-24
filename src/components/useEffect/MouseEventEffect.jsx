// useEffect (componentDidMount, componentWillUnmount)
import React, { useState, useEffect } from 'react'

export const MouseEventEffect = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = e => {
    console.log('getMousePosition')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect')

    window.addEventListener('mousemove', getMousePosition)
    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])
  return (
    <div>
      <ul>
        <li>x座標: {x}</li>
        <li>y座標: {y}</li>
      </ul>
    </div>
  )
}
