import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/molecules/adminNavbar/AdminNavbar'
import SideBar from '../components/molecules/sideBar/SideBar'

function Layout() {
  return (
    <Grid>
      <AdminNavbar/>
      <Grid display={'flex'} justifyContent={"flex-start"} alignItems={"flex-start"}>
          <SideBar/>
          <Grid flex={5}>
          <Outlet/>

          </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout