import React, { useEffect, useRef } from 'react'

export const FocusInput = () => {
  const inputRef = useRef(null)
  useEffect(() => {
    console.log(inputRef)
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <p>useRef</p>
      {/* inputにrefプロパティに持たせる　refオブジェクトのcurrentプロパティにinputnodeが格納されてアクセス可能 */}
      <input ref={inputRef} type='text' />
    </div>
  )
}
// jsx内のnodeに対してimmutableにしアクセスする
