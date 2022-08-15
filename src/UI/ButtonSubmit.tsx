import React from 'react'

interface ButtonSubmitProps{
    children: React.ReactNode | string,
    className: string,
    onClick?: () => void
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({children, className, onClick}) => {
  return (
    <button type='submit' className={className} onClick={onClick}>{children}</button>
  )
}

export default ButtonSubmit