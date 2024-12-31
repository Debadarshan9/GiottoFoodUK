import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CarouselDemo from '@/components/Carousel'
import Container from '@/components/Container'
import Collections from '@/components/Collections'
import Footer from '@/components/Footer'
import Partners from '@/components/Partners'
import CartModal from '@/components/CartModal'

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
      <CarouselDemo/>
      <Container/>
      <Collections/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default Home