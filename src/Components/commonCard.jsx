import React from 'react'
import { Card,CardContent,CardMedia } from '@mui/material'
export default function CommonCard(props) {
    const {url,height,width,id}=props.card;
    const cardStyle={
        height:"250px",
        width:"100%px",
        objectFit:"cover"
    }
  return (
    <Card id={id}>
        <CardMedia
          component="img"
          image={url}
          alt="alt"
          sx={cardStyle}
        />
      </Card>
  )
}
