"use client";

import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          marginTop: "300px",
          height: "240px",
          width: "100%",
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
    </div>
  );
};
