"use client";
import "./Header.css";
import Image from "next/image";
import logo from "../../../public/Images/companylogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FC, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { pathnameMap } from "@/constants/constant";

const Header: FC = () => {
  const [isShow, setISShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleShow = () => {
    setISShow(!isShow);
  };

  const handleHide = () => {
    setISShow(false);
  };

  const isActive = (path: string) => pathname === path;

  const navigateTo = (path: string) => {
    setISShow(false);
    router.push(path);
  };

  return (
    <header>
      <div className="container-fluid">
        <nav className="navBar">
          <label>
            <Image src={logo} alt="companylogo" className="mainLogo" onClick={()=> router.push('/')} />
          </label>
          <ul className="webViewShow">
            <label className="crossCheck" onClick={handleHide}>
              <RxCross1 />
            </label>
            {Object.keys(pathnameMap).map((path) => (
              <li key={path}>
                <span
                  className={`${
                    isActive(path) ? "activeLinkItem" : "navLinkItem"
                  }`}
                  onClick={() => navigateTo(path)}
                  style={{ cursor: "pointer", textTransform: 'capitalize' }}
                >
                  {pathnameMap[path]}
                </span>
              </li>
            ))}
          </ul>
          {isShow && (
            <ul>
              <label className="crossCheck" onClick={handleHide}>
                <RxCross1 />
              </label>
              {Object.keys(pathnameMap).map((path) => (
                <li key={path}>
                  <span
                    className={`${
                      isActive(path) ? "activeLinkItem" : "navLinkItem"
                    }`}
                    onClick={() => navigateTo(path)}
                    style={{ cursor: "pointer" }}
                  >
                    {pathnameMap[path]}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <label className="MenuIcon" onClick={handleShow}>
            <GiHamburgerMenu />
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Header;
