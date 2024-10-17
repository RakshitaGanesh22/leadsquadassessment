import React from 'react';
import { useContext } from 'react';
import { Box, Button, Typography,CircularProgress } from '@mui/material';
import CommonCard from "./commonCard";
import { Context } from './contextProvider';
import { useTheme } from '@mui/material/styles'; 
import { useNavigate } from 'react-router-dom';
export default function Easy() {
  const { loading, cardData, error } = useContext(Context);
  const theme = useTheme(); // Access the theme object
  const navigate = useNavigate();
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "35px",
    justifyContent: "center",
    alignItems: "center",
    gridAutoRows: "minmax(250px, auto)",
    padding: "2rem",
    overflow: "hidden",
  };
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
          Easy Mode: Grid View
        </Typography>
      </Box>

      <Box sx={gridStyle}>
        {loading ? <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress/> </Box>: cardData.map((card, index) => (
          <CommonCard key={index} card={card} />
        ))}
        {error && <Typography color="error">Error occurred</Typography>}
      </Box>
    </Box>
  );
}
