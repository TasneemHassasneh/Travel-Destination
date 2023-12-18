import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Tours from '../Tours/Tours'
import Box from '@mui/material/Box';
import Navbar from '../Navbar/Navbar';

function Home() {
  return (
    <Box>
        <Navbar />
        <Header />
        <Tours />
        <Footer />
    </Box>
  )
}

export default Home