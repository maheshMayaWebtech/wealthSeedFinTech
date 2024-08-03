"use client"

import React from 'react'
import './index.css';
import CardBox from './varsitycard/CardBox';
import EducationVideo from './video/EducationVideo';
const Homepage = () => {
  return (
    <>
      <div className="container-fluid">
        <section className='heroBanner mb-5'>
          <div className="row">
            <div className="col-lg-7">
              <div>
                <h1 className='bannerMainHead'>Free and Open <span className='innerMainHead mb-4'>Stock Market and Financial Education</span></h1>
                <p className='bannerMainCont'>Wealthseed is an extensive and in-depth collection of stock market and financial lessons. It is free and openly accessible to everyone and is one of the largest financial education resources on the web. No signup, no pay-wall, no ads.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <label>
                <img src={'/Images/herobannerlogo.png'} alt='financiallogo' />
              </label>
            </div>
          </div>
        </section>

        <section className='ExploreVarsity mb-5'>
          <div>
            <h2 className='varsityInnerHead mb-4'>Explore FinanceWithArnav</h2>
          </div>
          <div className="outerBox">
            <CardBox />
          </div>
        </section>

        <section className='videoBox mb-5'>
          <div>
            <h2 className='educationVideo mb-5'>Videos</h2>
          </div>
          <div className='videoWrapperBox'>
            <EducationVideo />
          </div>
        </section>

        {/* <section className='OpenAccount'>
          <div className="row">
            <div className='col-lg-7'>
              <h2 className='accountInfoHead'>Dont have a FinCafe account?</h2>
              <p className='accountInfoCont'>Modern platforms and apps / Free equity investments / Flat ₹20 intraday and F&O trades.</p>
            </div>
            <div className='col-lg-5 text-end'>
              <button type='button' className='btnAccount'>Open an account</button>
            </div>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default Homepage;