import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Images/companylogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  let date = new Date();
  let orgdate = date.getFullYear();

  const [currentYear, setCurrentYear] = useState(orgdate);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(currentYear);
    }, 60000);

    return () => clearInterval(interval);
  }, [currentYear]);
  return (
    <>
      <footer className="footBar">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <label>
              <Image
                height={100}
                width={150}
                src={logo}
                alt="logo"
                className="mainlogo"
              />
            </label>
            <div className="SocialIcon">
              <FaFacebook className="mediaHandleIcon" />
              <Link
                href={"https://www.instagram.com/the_wealthseed"}
                target="_blank"
              >
                <FaInstagram className="mediaHandleIcon" />
              </Link>
              <Link
                href={"https://linkedin.com/in/harishdel"}
                target="_blank"
              >
              <FaLinkedin className="mediaHandleIcon" />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div>
              <h2 className="QuickLinkHead">Quick Links</h2>
              <span className="lineShow"></span>
              <ul className="footLinkInfo">
                <li>
                  <Link href="/home" className="footNavCont">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/modules" className="footNavCont">
                    Modules
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="footNavCont">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="footNavCont">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h1 className="disclaimInfoCont">Disclaimer</h1>
              <span className="lineShow"></span>
              <p className="disclaimCont">
                We do not provide investment advice or tips to buy/sell
                securities. We promote independent research and decision-making.
                We are not SEBI registered and do not guarantee any financial
                returns. Our organization is not affiliated with any specific
                company or financial institution unless otherwise stated.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="outerBoxWrapper">
        <h2 className="copyRightSection">
          Copyright © {currentYear} WealthSeed. All rights reserved.
        </h2>
      </div>
    </>
  );
};

export default Footer;
