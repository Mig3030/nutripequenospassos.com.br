import React from 'react'

export const Badge = React.forwardRef(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`} {...props} />
))
Badge.displayName = 'Badge'
