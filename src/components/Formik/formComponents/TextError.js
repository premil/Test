import React from 'react'

function TextError(props) {
  return (
    /* Error Message font color and other styles inlude this => className='error' */
    <div className='error'>
      {props.children}
    </div>
  )
}

export default TextError