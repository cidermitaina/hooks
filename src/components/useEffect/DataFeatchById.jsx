//useEffect (datafetch)
import React, { useState, useEffect } from 'react'

export const DataFeatchById = () => {
  const [post, setPost] = useState(null)
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    console.log('fetchData')
    setLoading(true)
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const item = await responce.json()
    console.log(item)

    setPost(item)
    setLoading(false)
  }

  // idが変わるたびに変えたい
  useEffect(() => {
    console.log('useEffect')
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  console.log('render')
  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      {loading ? <h1>loading... </h1> : <h1>{post.title}</h1>}
    </div>
  )
}

// export const DataFeatchById = () => {
//   const [post, setPost] = useState(null)
//   const [id, setId] = useState(1)
//   const [loading, setLoading] = useState(true)

//   const fetchData = useCallback(async () => {
//     setLoading(true)
//     const responce = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     )
//     const item = await responce.json()
//     console.log(item)

//     setPost(item)
//     setLoading(false)
//   }, [id])

//   // idが変わるたびに変えたい
//   useEffect(() => {
//     fetchData()
//   }, [fetchData, id])

//   return (
//     <div>
//       <input type='text' value={id} onChange={e => setId(e.target.value)} />
//       {loading ? <h1>loading... </h1> : <h1>{post.title}</h1>}
//     </div>
//   )
// }
