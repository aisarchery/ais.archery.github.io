import React from 'react'

const Tittle = ({children, color='black', font='regular', size='sm'}) => {
  return (
    <h1 className={`text-${size}  font-${font} text-${color} md:tracking-wider`} >{children}</h1>
  )
}

export default Tittle