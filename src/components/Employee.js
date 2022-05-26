import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Employee() {

  const navigate = useNavigate()
  const EMPLOYEES = [
    {
      id: 1,
      name: "Nguyên Ngọc",
      age: 20
    },
    {
      id: 2,
      name: "Thanh Hà",
      age: 25
    },
    {
      id: 3,
      name: "Neil Gaiman",
      age: 22
    },
  ]

  const showDetails = function(employee) {
    navigate(`/employee-details/`, { state: employee })
  }

  const location = useLocation()
  const { state } = location
  console.log(location)
  return (
    <div>
      <h1>{`Logged in to account: ${state.username} - ${state.password} `}</h1>
      <hr />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            EMPLOYEES.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>
                  <button className='btn btn-info'  onClick={(e)=> showDetails(employee)}>Details</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Employee