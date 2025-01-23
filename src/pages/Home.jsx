import React, { useState, useEffect } from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { getCards } from "../utils/dataService";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedCards = getCards();
    setCards(fetchedCards);
  }, []);

  const handleCardClick = (card) => {
    navigate(`/details/${card.id}`, { state: { card } });
  };

  const handleAddClick = () => {
    navigate("/add");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Math Formulae Cards
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              onClick={() => handleCardClick(card)}
              sx={{
                cursor: "pointer",
                backgroundColor: "background.paper",
                border: "1px solid #9575cd",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s",
                  boxShadow: "0px 4px 20px rgba(103, 58, 183, 0.5)",
                },
              }}
            >
              <CardMedia component="img" image={card.image} alt={card.title} />
              <CardContent>
                <Typography variant="h6" sx={{ color: "text.primary" }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "#673ab7",
          "&:hover": {
            backgroundColor: "#9575cd",
          },
        }}
        onClick={handleAddClick}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};
