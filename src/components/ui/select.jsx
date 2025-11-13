import React from 'react'

export const Select = ({ children, ...props }) => <select {...props}>{children}</select>
export const SelectTrigger = ({ children, ...props }) => <div {...props}>{children}</div>
export const SelectValue = ({ placeholder }) => <span>{placeholder}</span>
export const SelectContent = ({ children }) => <>{children}</>
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>
