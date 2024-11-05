import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <section className="bg-light p-5 min-vh-100">
            <div className='container-fluid'>
            <div className='d-sm-flex align-items-center justify-content-between'>
                <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
                <h1 className=''>Hi, I'm M. Faris Fadillah</h1>
                <h1 className='fw-bold custom-font'>Web Developer.</h1>
                <p className='pt-5'>Frontend Development / ReactJS / Web Designing</p>
                </div>
    
                <div>
                <Player
                    src='https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json'
                    className="player"
                    loop
                    autoplay
                    style={{ maxHeight: '700px', maxWidth: '700px' }}
                />
                </div>
            </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Home