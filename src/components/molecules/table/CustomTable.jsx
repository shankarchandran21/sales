import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography } from '@mui/material';



export default function CustomTable({data}) {
  const smallHeightStyle = {
    height: '20px',
    minHeight: '20px',
    padding: '5px 4px',
  };

  const rotatedTextStyle = {
    transform: 'rotate(-90deg)', // Rotate the text 90 degrees counterclockwise
  
    whiteSpace: 'wrap',        // Prevent text wrapping
    height: '100px',             // Adjust the height as per your needs
    lineHeight: '1',             // Control the line height
    display: 'flex',             // Use flexbox for better alignment
    alignItems: 'center',        // Vertically align the text
    justifyContent: 'center',    // Horizontally align the text
    padding: '0',                // Remove padding
    margin: '0',                 // Remove margin
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={smallHeightStyle}>Category</TableCell>
            <TableCell style={smallHeightStyle}>Team Member</TableCell>
            <TableCell style={smallHeightStyle}>Registration</TableCell>
            <TableCell style={smallHeightStyle}>Target</TableCell>
            <TableCell style={smallHeightStyle}>Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((group, index) => (
            <React.Fragment key={index}>
              {group.rows.map((row, i) => (
                <TableRow key={i}>
                  {i === 0 && (
                    <TableCell
                      rowSpan={group.rows.length}
                     
                      sx={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: '#E0E0E0',
                        fontWeight: 'bold',
                        padding: 0, // Remove padding to better align the text
                        fontSize: group.rows.length<=3? 12: group.rows.length <= 7?17:20, 
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <div style={{ maxWidth:"100px", width: '100%', textAlign: 'center', ...rotatedTextStyle }}>
                          <span>{group.icon}</span> {group.category}
                        </div>
                      </div>
                    </TableCell>
                  )}
                  <TableCell
                    sx={{
                      backgroundColor: i % 2 === 0 ? '#81bce8' : '#4998d4',
                      fontWeight: 'bold',
                      ...smallHeightStyle,
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: '#ffa778',
                      position: 'relative',
                      overflow: 'hidden',
                      ...smallHeightStyle,
                    }}
                  >
                    {row.enrollments}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: '#F6E96B',
                      ...smallHeightStyle,
                    }}
                  >
                    ${row.turnover.toFixed(2)}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: '#bcf966',
                      ...smallHeightStyle,
                    }}
                  >
                    {row.enrollments}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} style={{ fontWeight: 'bold', backgroundColor: '#31647e', color: '#fff', ...smallHeightStyle }}>
                  Total
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: '#a43610', color: '#fff', ...smallHeightStyle }}>
                  {group.rows.reduce((acc, curr) => acc + curr.enrollments, 0)}
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: '#437700', color: '#fff', ...smallHeightStyle }}>
                  ${group.rows.reduce((acc, curr) => acc + curr.turnover, 0).toFixed(2)}
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: '#0A6847', color: '#fff', ...smallHeightStyle }}>
                  {group.rows.reduce((acc, curr) => acc + curr.enrollments, 0)}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
          <TableRow>
            <TableCell colSpan={2} style={{ fontWeight: 'bold', backgroundColor: '#FF0000', color: '#fff', ...smallHeightStyle }}>
              Grand Total
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#FF0000', color: '#fff', ...smallHeightStyle }}>
              $ 877987
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#FF0000', color: '#fff', ...smallHeightStyle }}>
              $ 4567
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#FF0000', color: '#fff', ...smallHeightStyle }}>
              $ 9686
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} style={{ fontWeight: 'bold', backgroundColor: '#FFB200', color: '#fff', borderRight: '1px solid #fff', ...smallHeightStyle }}>
              <Grid display={'flex'} justifyContent={"space-between"} alignItems={"center"}>
                <Typography>Yearly Target</Typography>
                <Typography>$ 41.2M/40M</Typography>
              </Grid>
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#FFB200', color: '#fff', borderRight: '1px solid #fff', ...smallHeightStyle }}>
              <Grid display={'flex'} justifyContent={"space-between"} alignItems={"center"}>
                <Typography>Quarterly Target</Typography>
                <Typography>$ 41.2M/40M</Typography>
              </Grid>
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#FFB200', color: '#fff', ...smallHeightStyle }}>
              <Grid display={'flex'} justifyContent={"space-between"} alignItems={"center"}>
                <Typography>Monthly Target</Typography>
                <Typography>$ 41.2M/40M</Typography>
              </Grid>
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#FFB200', color: '#fff', borderRight: '1px solid #fff', ...smallHeightStyle }} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
