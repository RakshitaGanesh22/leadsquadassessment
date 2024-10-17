import { Button,Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
export default function Home() {
    const theme = useTheme();
    const navigate = useNavigate();
    function HandleClick(prop){
        navigate(`./${prop}`);
    }
  return (
    <Box sx={{ padding: "1rem" ,backgroundColor: theme.palette.background.default,height:"100vh",display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",gap:"5rem"}}>
    <Typography variant="h1" component="h1" sx={{
            display: "flex",
            justifyContent: 'center',
            color: theme.palette.primary.main, 
            position: "sticky",
            
          }}>Welcome! Let’s get started!</Typography>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:'space-around',gap:"6rem"}}>
        <Typography variant="h4" sx={{color:"white"}}>Click here for <b>Easy</b> view {` >>`}<Button variant="contained"onClick={()=>{HandleClick("easy")}}><b>Easy</b></Button></Typography>
        <Typography variant="h4" sx={{color:"white"}}>Click here for <b>Medium</b> view {` >>`}  <Button variant="contained"onClick={()=>{HandleClick("medium")}}><b>Medium</b></Button></Typography>
        <Typography variant="h4" sx={{color:"white"}}>Click here for <b>Hard</b> view {` >>`}  <Button variant="contained"onClick={()=>{HandleClick("hard")}}><b>Hard</b></Button></Typography>
    </Box>
    </Box>
  )
}
