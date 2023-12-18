import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/db.json";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";
function TourDetails() {
  const { id } = useParams();
  const tour = data.filter((tour) => tour.id === id)[0];
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const description = showMore
    ? `${tour.info} `
    : `${tour.info.substring(0, 100)}...`;
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Navbar />
      <Container height="100%" width="100%" alignItems="center" justifyContent="center">
        <Card sx={{
          my:{md:15, xs:2},
          height:{md:"50vh", xs:"100vh"},
          boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.1)"
        }}>
          <Stack height="100%" width="100%" alignItems="center" justifyContent="center" spacing={2} direction={{md:"row", xs:"column"}}>
            <Stack width="50%">
              <CardMedia
                component="img"
                height="100%"
                image={tour.image}
                alt={tour.name}
              />
            </Stack>
            <Stack  width="50%">
              <CardContent>
                <Typography color="#05103D" fontFamily="-moz-initial" variant="h3" textAlign="left" mb={{md:2, xs:0}}>{tour.name}</Typography>
                <Typography color="#05103D" fontFamily="cursive" variant="h5" textAlign="left" mb={{md:2, xs:0}}>price: {tour.price} $</Typography>
                <Typography color="#05103D" fontFamily="cursive" variant="body2" fontSize={{md:15, xs:10}} textAlign="left">{description}</Typography>
                <Button onClick={handleShowMore}>
                  {showMore ? "See less" : "See more"}
                </Button>
              </CardContent>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}

export default TourDetails;
