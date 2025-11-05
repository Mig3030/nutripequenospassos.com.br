import React from 'react'

export const Button = React.forwardRef(({ className = '', variant = 'default', size = 'md', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none'
  const variants = {
    default: 'bg-pink-500 text-white hover:bg-pink-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'hover:bg-gray-100 text-gray-700'
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
})

Button.displayName = 'Button'
