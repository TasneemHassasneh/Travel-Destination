import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Tours from '../Tours/Tours'
import Box from '@mui/material/Box';
function Home() {
  return (
    <Box>
        <Header />
         <Tours />
        <Footer />
    </Box>
  )
}

export default Home