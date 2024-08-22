import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AdminDashboard, Live} from '../pages'
import Layout from './Layout'

function RouterComponents() {
  return (
    <Routes>
            <Route path='/admin' element={<Layout/>}>
                  <Route index element={<AdminDashboard/>}/>  
            </Route>
            <Route path='/' element={<Live/>}/>
    </Routes>
  )
}

export default RouterComponents