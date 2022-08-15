import React from 'react'

interface ButtonLeranMoreProps{
  className: string,
  children: React.ReactNode | string,
  onClick?: () => void
}

const ButtonLearnMore: React.FC<ButtonLeranMoreProps> = ({className, children, onClick}) => {
  return (
    <button className={className} onClick={onClick} >{children}</button>
  )
}

export default ButtonLearnMore