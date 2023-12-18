import React from "react";
import travelIcon from "../../assets/travel.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
        background:"#020617B2",
        backgroundImage:"URL('https://images.pexels.com/photos/2031773/pexels-photo-2031773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize:"100%",
        backgroundBlendMode: 'overlay'
      }}
    >
   
      <Container
        alignItems=""
        justifyContent="flex-start"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          sx={{height: "100%",}}
          alignItems="center"
          justifyContent="center"
          orientation="horizontal"
          spacing={5}
        >
          <Stack>
            <img alt="" src={travelIcon} style={{ width: "70px" }} />
          </Stack>
          <Stack spacing={5}>
            <Typography color="white" fontFamily="cursive" variant="h3">
            Embark on a journey of discovery with our travel destination app!
            </Typography>
            <Typography color="white" fontFamily="cursive" variant="body1" fontSize={18}>
            Explore breathtaking landscapes, immerse yourself in vibrant cultures, and create unforgettable memories.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
