import React from 'react'

const Button = ({ children, onClick, styleBtn }) => {
  return (
    <button 
        type='button'
        className={styleBtn}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button