"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import { History } from "@/components/Histories";
import { Contents } from "./Contents";

import "@/styles/HistoryCard.css";

interface HistoryCard {
  history: History;
}

export const HistoryCard: React.FC<HistoryCard> = ({ history }) => {
  const showDetail = () => {
    console.log("はーい，こんにちは");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box>
        <Card
          sx={{ width: 350, height: 350, marginLeft: 35 }}
          onClick={handleOpen}
          className="card"
        >
          <CardMedia
            className="card-media"
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Contents></Contents>
      </Modal>
    </div>
  );
};
