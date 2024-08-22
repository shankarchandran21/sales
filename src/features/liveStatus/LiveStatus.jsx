import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../../components/molecules/navbar/Navbar'
import CustomTable from '../../components/molecules/table/CustomTable'


const data = [
  {
    category: 'Diploma of Nursing',
    icon: '🍓',
    rows: [
      { name: 'Renjith N J', enrollments: 0, turnover: 0 },
      { name: 'Sreekumar TB', enrollments: 0, turnover: 0 },
      { name: 'Parvathy S Madhu', enrollments: 19, turnover: 485351.55 },
      { name: 'Parvathy S Madhu', enrollments: 19, turnover: 485351.55 },
      { name: 'Parvathy S Madhu', enrollments: 19, turnover: 485351.55 },
      { name: 'Parvathy S Madhu', enrollments: 19, turnover: 485351.55 },
      { name: 'Parvathy S Madhu', enrollments: 19, turnover: 485351.55 },
      { name: 'Parvathy S Madhu', enrollments: 19, turnover: 485351.55 },
      
    ],
  },
  {
    category: 'CIII in Pathology Collection ',
    icon: '🍎',
    rows: [
      { name: 'Abin Raphael M M', enrollments: 13, turnover: 321341.4 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
      { name: 'Mohammed Sufiyan', enrollments: 0, turnover: 0 },
    ],
  },
];
function LiveStatus() {
  return (
    <Grid>
          <Navbar/>
          <CustomTable data={data}/>
    </Grid>
  )
}

export default LiveStatus