import React from 'react'

const Button = ({ children, onClick, styleBtn, btnType }) => {
  return (
    <button 
        type={btnType || 'button'}
        className={styleBtn}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button