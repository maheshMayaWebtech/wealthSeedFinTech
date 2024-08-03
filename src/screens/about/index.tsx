"use client"
import { FC } from 'react';
import './index.css';
import Image from 'next/image';
import aboutlogo from '../../../public/Images/aboulogo.jpeg';

const AboutUs: FC = () => {
    return (
        <div className='container-fluid'>
            <section className='aboutCompany'>
                <div>
                    <h1 className='aboutInfoHead'>About us</h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className='w-100 mt-2'>
                                <Image width={100} height={100} src={aboutlogo} alt='aboutCompnayLogo' className='fincafeLogo' />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <div className='aboutCompanyInfo'>
                                <p className='innerInfoCont'>Who We Are</p>
                                <h2 className='innerInfoHead'>Welcome to Fincafe</h2>
                                <span className='lineShow mb-4'></span>
                                <div>
                                    <p className='subInnerCont'>The pinnacle of stock market education in Noida. Here, we dont just teach; we empower. Whether you are a newcomer to the world of trading or a seasoned investor looking to refine your strategies, Fincafe offers comprehensive classes tailored to your level of expertise.</p>
                                    <p className='subInnerCont'><i>From laying the groundwork with fundamental concepts to delving into sophisticated trading techniques, our courses cover the full spectrum of stock market trading and investing. Led by seasoned professionals, our instructors provide personalized guidance and hands-on experience to ensure that every student gains the confidence and skills needed to thrive in the financial markets.</i></p>
                                    <p className='subInnerCont'>But what sets Fincafe apart isnt just our commitment to education its our dedication to your success. We understand that knowledge alone isn not enough; practical experience is key. That is why we go the extra mile to connect our students with opportunities in proprietary trading firms, opening doors to lucrative careers as full-time traders.</p>
                                    <p className='subInnerCont'>With a proven track record of success, we have helped hundreds of students embark on their financial journey with clarity and confidence. Whether you are aiming to grow your wealth, secure your financial future, or pursue a career in trading, Fincafe is your trusted partner every step of the way.</p>
                                    <p className='subInnerCont'>Join us at Fincafe and discover the transformative power of financial education. Unlock your potential and chart a course towards a brighter, more prosperous future with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;