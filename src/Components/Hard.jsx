import React from 'react';
import { useContext,useState } from 'react';
import { Box, Button, Typography,CircularProgress } from '@mui/material';
import CommonCard from "./commonCard";
import { Context } from './contextProvider';
import { useTheme } from '@mui/material/styles'; // Use MUI's theme hook
import { useNavigate } from 'react-router-dom';
export default function Hard() {
  const { loading, cardData, error,newCardData,setNewCardData } = useContext(Context);
  const[Loading,setLodingg]=useState(false);
  const theme = useTheme(); // Access the theme object
  const navigate = useNavigate();
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax( 1fr))",
    gridGap: "35px",
    justifyContent: "center",
    alignItems: "center",
    gridAutoRows: "minmax(250px, auto)",
    padding: "2rem",
    overflow: "hidden",
  };
  function debounce(func, delay) {
    
    let debounceTimer;
    return function (...args) {
        setLodingg(true);
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }
  const handleClick=debounce(()=> {
    setNewCardData((prev)=>[...prev,...cardData]);
    setLodingg(false);
  },1000)
  return (
    <Box sx={{ padding: "1rem" ,backgroundColor: theme.palette.background.default,height:"100%"}}>
      <Button
        variant="contained"
        sx={{ float: "right", backgroundColor: theme.palette.background.papers }}
        onClick={()=>{navigate("/");}}
      >
        Home
      </Button>

      <Box>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            display: "flex",
            justifyContent: 'center',
            color: theme.palette.primary.main, 
            position: "sticky",
          }}
        >
          Hard Mode: Infinite Scroll View
        </Typography>
      </Box>

      <Box sx={gridStyle}>
        {loading ? <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress/> </Box>: newCardData.map((card, index) => (
          <CommonCard key={index} card={card} />
        ))}
        {error && <Typography color="error">Error occurred</Typography>}
      </Box>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>{Loading ? <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress/> </Box>:<Button variant="contained" onClick={()=>{handleClick()}} sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>Load More</Button>}</Box>
    </Box>
  );
}
