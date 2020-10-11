import React from 'react'
import Body from "./body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {
    return (
        <div className="home">
      <Header/>
     <Body/>
      <Footer/>
    </div>
    )
}

export default Home
