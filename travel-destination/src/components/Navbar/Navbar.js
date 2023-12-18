import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import logo from "../../assets/travel.png";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Navbar() {
  return (
    <Box
      sx={{
        bgcolor: "#05103D",
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        width="100%"
        direction="row"
        spacing={{ md: 50, xs: 10 }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Link
            sx={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
       
            }}
          >
            <img alt="logo" src={logo} style={{ width: "40px" }} />
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            <Typography fontFamily="cursive" variant="body1">
              Travel Destination
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" spacing={{ md: 10, xs: 1 }}>
          <Link
          href="/"
            sx={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            <HomeOutlinedIcon />
            <Typography
              color="white"
              fontFamily="cursive"
              variant="body2"
              sx={{
                pl: 1,
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link
         
            sx={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            <InfoOutlinedIcon />
            <Typography
              color="white"
              fontFamily="cursive"
              variant="body2"
              sx={{
                pl: 1,
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              Details
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navbar;
