import {Grid, Paper, TableHead, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Avatar, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminTable from './components/AdminTable';

const initialTasks = [
  { name: 'Shankar', Registration: 70, Target: 20, percentage: '70%' },
  { name: 'Alex', Registration: 70, Target: 20, percentage: '70%' },
  { name: 'Sanjay', Registration: 70, Target: 20, percentage: '70%' },
];

function Admin() {
  const [expanded, setExpanded] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskName, setNewTaskName] = useState('');


  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && newTaskName.trim() !== '') {
      const newTask = {
        name: newTaskName,
        Registration: 0, // Default values for new tasks
        Target: 0,
        percentage: '0%',
      };
      setTasks([...tasks, newTask]);
      setNewTaskName(''); // Clear the input field after adding the task
    }
  };

  const handleTaskChange =(index,key,value)=>{
      const updateTask = tasks.map((task,i)=> i === index ?{...task,[key]:value}:task)
      setTasks(updateTask)
  }


  return (
    <Grid p={2}>
             <Paper>
             <Box padding="8px" >
      {/* Header */}
      <Box display="flex" alignItems="center" marginBottom="16px" onClick={handleToggle} style={{ cursor: 'pointer' }}>
        <Typography variant="h6" sx={{color:"#B226B6"}} gutterBottom>
          Sprint 1
        </Typography>
        <Box flex={1} />
        <Typography variant="body2" color="textSecondary">
          16 - 30 Aug
        </Typography>
        <Box display="flex" alignItems="center" ml={2}>
          <Typography variant="body2" color="textSecondary" style={{ marginRight: '8px' }}>
            Burndown
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Complete
          </Typography>
        </Box>
      </Box>

      {/* Conditionally Render Table */}
      {expanded && (
      <AdminTable newTaskName={newTaskName} setNewTaskName={setNewTaskName} tasks={tasks} handleAddTask={handleAddTask} handleTaskChange={handleTaskChange}/>
      )}
    </Box>
             </Paper>
    </Grid>
  )
}

export default Admin