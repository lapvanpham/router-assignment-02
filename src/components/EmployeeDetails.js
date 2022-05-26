import React from 'react'
import { useLocation } from 'react-router-dom'

function EmployeeDetails() {
  const location = useLocation()
  const { state } = location
  console.log(state)
  return (
    <div>
      <h1>ID: {state.id}</h1>
      <h1>Name: {state.name}</h1>
      <h1>Age: {state.age}</h1>
    </div>
  )
}

export default EmployeeDetails