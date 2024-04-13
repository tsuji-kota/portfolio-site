"use client";

import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { History } from "@/components/Histories";

interface HistoryCard {
  history: History;
}

export const HistoryCard: React.FC<HistoryCard> = ({ history }) => {
  const showDetail = () => {
    console.log("はーい，こんにちは");
  };

  return (
    <Box>
      <Card
        sx={{ width: 350, height: 350, marginLeft: 35 }}
        onClick={showDetail}
      >
        <CardMedia
          sx={{
            borderColor: "grey.500",
            width: 200,
            height: 200,
            marginLeft: 10,
            marginTop: 1,
            borderRadius: 1,
          }}
          component="img"
          alt={history.name}
          height="9rem"
          image={history.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {history.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {history.abstract}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
