import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Employee from './Employee';
import EmployeeDetails from './EmployeeDetails';

const  Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/employee-details' element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home;