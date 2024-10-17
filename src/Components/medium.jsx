// import React from 'react';
// import { useContext } from 'react';
// import { Box } from "@mui/material";
// import Slider from 'react-slick';
// import CommonCard from "./commonCard";
// import { Context } from './contextProvider';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ArrowLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowRightIcon from '@mui/icons-material/ArrowCircleRight';
// // Custom next arrow component
// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//     style={{...style,cursor: 'pointer',float: 'right',position: 'absolute',top: 0,right: 0,zIndex:100,height:"100px",width:"100px"}}
//       onClick={onClick}
//     >Next{`>`}</div>
//   );
// };

// const PrevArrow = (props) => {
//   const {  style, onClick } = props;
//   return (
//     <div
//       style={{ ...style,cursor: 'pointer',float: 'left',position: 'absolute',top: 0,left:0 ,zIndex: 1000 }}
//       onClick={onClick}
//     >{`<`}Prev</div>
//   );
// };

// export default function Medium() {
//   const { cardData } = useContext(Context);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,  
//     prevArrow: <PrevArrow />,  
//     responsive: [
//       { breakpoint: 1440, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//       { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//       { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <Box sx={{marginTop:"2rem"}}>
//       <Slider {...settings}>
//         <Box>
//         {cardData.map((card, index) => (
//           <CommonCard key={index} card={card} />
//         ))}
//         </Box>
//       </Slider>
      
//     </Box>
//   );
// }
import React from 'react';
import { useContext,useState,useRef ,useEffect} from 'react';
import { Box, Button, Typography,CircularProgress } from '@mui/material';
import CommonCard from "./commonCard";
import { Context } from './contextProvider';
import { useTheme } from '@mui/material/styles'; // Use MUI's theme hook
import { useNavigate } from 'react-router-dom';
export default function Medium() {
  const { loading, cardData, error } = useContext(Context);
  const theme = useTheme(); 
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const [prevValue, setPrev] = useState(0);
    const [nextValue, setNext] = useState(4); 
    const [currentValue, setCurrent] = useState(1);
    const [filterData, setFilter] = useState([]);
    function HandlePrev() {
        if (prevValue > 0) {
            const newPrevValue = prevValue - 3;
            const newNextValue = nextValue - 3;
            setPrev(newPrevValue);
            setNext(newNextValue);
            setCurrent((prev) => prev - 1);
            setFilter(cardData.slice(newPrevValue, newNextValue));
            setDisablePrev(newPrevValue === 0);
            setDisableNext(false);
        }
    }
    function HandleNext() {
        if (nextValue < cardData.length) {
            const newPrevValue = prevValue + 3;
            const newNextValue = nextValue + 3;
            setPrev(newPrevValue);
            setNext(newNextValue);
            setCurrent((prev) => prev + 1);
            setFilter(cardData.slice(newPrevValue, newNextValue));
            setDisablePrev(false);
            setDisableNext(newNextValue >= cardData.length);
        }
    }
    useEffect(() => {

        function ShowInitialData(data1) {
            if (data1.length > 3) {
                setFilter(data1.slice(0, 3));
                setDisablePrev(true);
                setDisableNext(false);
            } else {
                setFilter(data1);
                setDisablePrev(true);
                setDisableNext(true);
            }
        }
        ShowInitialData(cardData);
    }, [cardData]);
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
    <Box sx={{ padding: "2rem" ,backgroundColor: theme.palette.background.default,height:"100vh"}}>
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
          Medium Mode: Pagination View
        </Typography>
      </Box>
      <ul style={{listStyle:"none",display:"flex",gap:"1rem",justifyContent:"end",alignItems:"center"}}>
    <li>
        <Button variant="contained" onClick={HandlePrev} sx={{ color:'#ffffff', backgroundColor: theme.palette.background.papers }}disabled={disablePrev}>Previous</Button>
    </li>
    <li style={{color:"white"}}>{currentValue}</li>
    <li>
        <Button variant="contained" onClick={HandleNext}sx={{  backgroundColor: theme.palette.background.papers }} disabled={disableNext}>Next</Button>
    </li>
        </ul>

      <Box sx={gridStyle}>
        {loading ? <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress/> </Box>: filterData.map((card, index) => (
          <CommonCard key={index} card={card} />
        ))}
        {error && <Typography color="error">Error occurred</Typography>}
      </Box>
    </Box>
  );
}
