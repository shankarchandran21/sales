import { Box,Grid,Typography } from '@mui/material'
import React from 'react'
import LiveNavbar from "../../../assets/images/LiveNavbar.jpg"
function Navbar() {
  return (
    <Grid sx={{ display: "flex", justifyContent: "space-evenly",alignItems:"center" ,position: "relative", height: "20vh" }}>
    <img
        src={LiveNavbar}
        alt="Background"
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,  // Places the image behind other content
        }}
    />
    <Box>
        <Typography variant='h1'>LOGO</Typography>
    </Box>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Typography variant='h4'> SALES PERFORMANCE </Typography>
        <Typography variant='h6'> LIVE STATUS </Typography>
    </Box>
    <Box>
            
    </Box>
</Grid>
  )
}

export default Navbar