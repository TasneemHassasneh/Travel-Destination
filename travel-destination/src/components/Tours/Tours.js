import React from "react";
import data from "../../data/db.json";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
        <Grid
          pb={5}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((tour) => (
            <Grid item xs={2} sm={4} md={4} key={tour.id}>
              <Card
                sx={{
                  transition: "transform 0.2s, fill 0.2s, stroke-width 0.2s",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.05)",
                    strokeWidth: "2px",
                    transitionDuration: "0.1s",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250px"
                  image={tour.image}
                  alt={tour.name}
                />
                <CardContent
                  sx={{
                    bgcolor: "#93A5F6",
                    transition: "transform 0.2s, fill 0.2s, stroke-width 0.2s",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      transform: "scale(1.25)",
                      color: "white",
                      strokeWidth: "2px",
                      transitionDuration: "0.2s",
                    },
                  }}
                >
                  <Typography>{tour.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Tours;
