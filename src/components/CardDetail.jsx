import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link} from "react-router-dom"

export const CardDetails = () => {
  const { state } = useLocation();
  const { card } = state;

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Link to={"/"}>
        <ArrowBackIosIcon sx={{position: "fixed", zIndex:"1000", top: 10, left: 20, color: "white"}}/>
      </Link>
      <Card>
        <CardMedia component="img" image={card.image} alt={card.title} />
        <CardContent>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {card.title}
          </Typography>
          <Typography variant="body1">{card.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
