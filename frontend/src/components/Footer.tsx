"use client";

import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      mt="300px"
      sx={{
        height: "240px",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Roboto", fontWeight: 50, color: "white" }}
      >
        TSUJI KOTA 2002 -2024
      </Typography>
    </Box>
  );
};
