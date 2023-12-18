import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Tour from "./Tour/Tour";
const Tours = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Container>
        <Typography color="#05103D" fontFamily="cursive" variant="h4" py={5}>
          Your next adventure starts here!
        </Typography>
        <Typography color="#05103D" fontFamily="cursive" variant="body1">
          Plan your perfect getaway, discover local treasures, and make every
          trip a story worth sharing.
        </Typography>
        <Tour />
      </Container>
    </Box>
  );
};

export default Tours;
