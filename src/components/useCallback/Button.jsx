//useCallback
import React from 'react'

export const Button = React.memo(({ handleClick, children }) => {
  console.log(`Button -`, children)

  return <button onClick={handleClick}>{children}</button>
})
