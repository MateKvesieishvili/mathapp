import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { getCards, saveCards } from "../utils/dataService";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from "react-router-dom";

export const AddCard = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { id: Date.now(), title, image, description };
    const existingCards = getCards();
    const updatedCards = [...existingCards, newCard];
    saveCards(updatedCards);
    setTitle("");
    setImage("");
    setDescription("");
    navigate("/")
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Link to={"/"}>
        <ArrowBackIosIcon sx={{position: "absolute", zIndex:"1000", top: 10, left: 20, color: "white"}}/>
      </Link>
      <Paper sx={{ padding: "30px", backgroundColor: "background.paper", border: "1px solid #9575cd" }}>
        <Typography
          variant="h4"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Add New Math Formula
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
            required
            InputLabelProps={{
              style: { color: "#bdbdbd" },
            }}
          />
          <TextField
            fullWidth
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            sx={{ mb: 2 }}
            required
            InputLabelProps={{
              style: { color: "#bdbdbd" },
            }}
          />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
            required
            InputLabelProps={{
              style: { color: "#bdbdbd" },
            }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add Card
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
