import React from 'react'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Avatar, Stack } from '@mui/material';
import {Grid, Paper, TableHead, TextField } from '@mui/material'

function AdminTable({handleAddTask,handleTaskChange,tasks,newTaskName,setNewTaskName}) {





    const smallHeightStyle = {
        height: '20px',
        minHeight: '20px',
        padding: '5px 4px',
      };

  return (
    <TableContainer 
    sx={{
      border: "1px solid #e0e0e0",
      borderRadius: "5px 0 0 5px",
      borderRight: "none !important",
      overflow: 'hidden', // Prevents the scrollbar from appearing
      '&::-webkit-scrollbar': {
        display: 'none', // Hides the scrollbar in Webkit-based browsers (like Chrome)
      },
      msOverflowStyle: 'none', // Hides the scrollbar in Internet Explorer and Edge
      scrollbarWidth: 'none', // Hides the scrollbar in Firefox
    }}
    >
      <Table sx={{
    borderLeft:"5px solid #B226B6 !important" ,
    borderRadius:"5px 0 0 5px"
    }}>
      <TableHead>
      <TableRow>
        <TableCell ></TableCell>
        <TableCell style={smallHeightStyle}>Team Member</TableCell>
        <TableCell style={smallHeightStyle}>Registration</TableCell>
        <TableCell style={smallHeightStyle} >Target</TableCell>
        <TableCell style={smallHeightStyle}>Percentage</TableCell>
      </TableRow>
    </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell style={smallHeightStyle} width="5%">
                <Box display="flex" alignItems="center">
                  <input type="checkbox" />
                </Box>
              </TableCell>
              <TableCell style={smallHeightStyle}  width="45%">
              <TextField
                  id="outlined-size-small"
                  defaultValue={task.name}
                  onChange={(e)=>handleTaskChange(index,"name",e.target.value)}
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '22px', // Adjust the overall height of the TextField
                      '& input': {
                        padding: '6px 8px', // Adjust the padding inside the input for height reduction
                      },
                      '& fieldset': {
                        borderColor: 'transparent', // Remove the border initially
                      },
                      '&:hover fieldset': {
                        borderColor: '#dcdcdc', // Show grey border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1e90ff', // Show blue border when focused
                      },
                    },
                  }}
                />
                {/* <Typography variant="body1">{task.name}</Typography> */}
              </TableCell>
              <TableCell style={smallHeightStyle} width="20%">
              <TextField
                    id="outlined-size-small"
                    defaultValue={task.Registration}
                    onChange={(e)=>handleTaskChange(index,"Registration",e.target.value)}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: '22px', // Adjust the overall height of the TextField
                        '& input': {
                          padding: '6px 8px', // Adjust the padding inside the input for height reduction
                        },
                        '& fieldset': {
                          borderColor: 'transparent', // Remove the border initially
                        },
                        '&:hover fieldset': {
                          borderColor: '#dcdcdc', // Show grey border on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1e90ff', // Show blue border when focused
                        },
                      },
                    }}
                  />
              </TableCell>
              <TableCell style={smallHeightStyle} width="20%">
                  <TextField
                id="outlined-size-small"
                defaultValue= {task.Target}
                onChange={(e)=>handleTaskChange(index,"Target",e.target.value)}

                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '22px', // Adjust the overall height of the TextField
                    '& input': {
                      padding: '6px 8px', // Adjust the padding inside the input for height reduction
                    },
                    '& fieldset': {
                      borderColor: 'transparent', // Remove the border initially
                    },
                    '&:hover fieldset': {
                      borderColor: '#dcdcdc', // Show grey border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e90ff', // Show blue border when focused
                    },
                  },
                }}
              />
                 
               
              </TableCell >
              <TableCell style={smallHeightStyle} width="10%">
              <TextField
                id="outlined-size-small"
                defaultValue= {task.percentage}
                onChange={(e)=>handleTaskChange(index,"percentage",e.target.value)}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '22px', // Adjust the overall height of the TextField
                    '& input': {
                      padding: '6px 8px', // Adjust the padding inside the input for height reduction
                    },
                    '& fieldset': {
                      borderColor: 'transparent', // Remove the border initially
                    },
                    '&:hover fieldset': {
                      borderColor: '#dcdcdc', // Show grey border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e90ff', // Show blue border when focused
                    },
                  },
                }}
              />
                    
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
          
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow>
          <TableCell  sx={{borderLeft:"5px solid #F6CAF8",
       height: '30px',
       minHeight: '30px',
       padding: '2px 4px',
      "&:hover": {
  borderLeft: "5px solid #B226B6", 
  cursor: "pointer",
}}} colSpan={5}>
              
              <TextField
                id="outlined-size-small"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                onKeyDown={handleAddTask}
                placeholder='+ Add team member'
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '30px', // Adjust the overall height of the TextField
                    '& input': {
                      padding: '6px 8px', // Adjust the padding inside the input for height reduction
                    },
                    '& fieldset': {
                      borderColor: 'transparent', // Remove the border initially
                    },
                    '&:hover fieldset': {
                      borderColor: '#dcdcdc', // Show grey border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e90ff', // Show blue border when focused
                    },
                  },
                }}
              />
            
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
   
    </TableContainer>
  )
}

export default AdminTable