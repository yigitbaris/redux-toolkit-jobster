import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Fam roof party twee, retro fit try-hard Brooklyn photo booth art
            party cronut solarpunk. Same wayfarers raclette, sus vinyl fit
            shabby chic post-ironic mustache four dollar toast bruh austin
            skateboard. Tbh plaid art party ugh
          </p>
          <Link
            to='/register'
            className='btn btn-hero'
          >
            Login/Register
          </Link>
        </div>
        <img
          src={main}
          alt='job hunt'
          className='img main-img'
        />
      </div>
    </Wrapper>
  )
}
export default Landing
