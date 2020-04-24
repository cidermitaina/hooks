// useState
import React, { useState } from 'react'

export const FormHook = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <div>
      <div>
        <p>firstName - {name.firstName}</p>
        <p>lastName - {name.lastName}</p>
      </div>
      <form action=''>
        <input
          type='text'
          value={name.firstName}
          onChange={e => {
            setName({ ...name, firstName: e.target.value }) //スプレッド構文を使用することでオブジェクトをコピーする。そのまま使用すると置換されてしまう。
          }}
        />
        <input
          type='text'
          value={name.lastName}
          onChange={e => {
            setName({ ...name, lastName: e.target.value })
          }}
        />
        <div>{JSON.stringify(name)}</div>
      </form>
    </div>
  )
}
