import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Produtos from '../components/produtos/Produtos'
import Sobre from '../components/Sobre/Sobre'
import Categorias from '../components/categorias/Categorias'
import Greemind from '../components/Greemind/Greemind'
import Footer from '../components/Footer/Footer'



const Home = () => {
  return (
    <main>
      <NavBar/>
      <Banner/>
      <Produtos/>
      <Sobre/>
      <Categorias/>
      <Greemind/> 
      <Footer/>
    </main>
  )
}

export default Home
