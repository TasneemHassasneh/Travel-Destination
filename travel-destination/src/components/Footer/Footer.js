import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <Box
      mt={5}
      p={{ md: 2, xs: 0 }}
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
        <Stack>
          <Typography color="white" fontFamily="cursive" variant="body1">
            &copy; 2023 Tasneem Hassasneh
          </Typography>
        </Stack>
        <Stack direction="row" spacing={{ md: 10, xs: 1 }}>
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
            <FacebookOutlinedIcon />
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
              Facebook
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
            <TwitterIcon />
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
              Twitter
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
            <GitHubIcon />
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
              GitHub
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
