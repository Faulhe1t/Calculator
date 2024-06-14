import React, { FC, PropsWithChildren } from 'react'
import "../Style.css"

interface OperationProps {
  onClick?: () => void
}

const Button: FC<PropsWithChildren<OperationProps>> = ({children, onClick}) => {
  return <button className='baseButton' onClick={ onClick }>
    { children }
  </button>
};

export default Button;