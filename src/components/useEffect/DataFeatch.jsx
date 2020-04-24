//useEffect (datafetch)
import React, { useState, useEffect } from 'react'

export const DataFeatch = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetcData = async () => {
    const responce = await fetch('https://api.randomuser.me')
    const data = await responce.json()
    const [item] = data.results

    setUser(item)
    setLoading(false)
  }

  useEffect(() => {
    fetcData()
  }, [])
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <h1>
          {user.name.first} {user.name.last}
        </h1>
      )}
    </div>
  )
}
