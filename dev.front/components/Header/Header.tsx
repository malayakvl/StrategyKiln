import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuSelector } from "../../redux/layouts/selectors";
import { toggleMenuAction } from "../../redux/layouts";
import { useState } from "react";
import { useWindowDimensions } from "../../lib/dimention";

const Header: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toggleMenu = useSelector(toggleMenuSelector);
  const [subMenuOpen, setSubMenuOpen] = useState({
    services: false,
    resources: false,
  });
  const [openedSubmenu, setOpenedSubmenu] = useState("");
  const { width } = useWindowDimensions();

  // const toggleSubmenu = (menuName: string) => {
  //   const tmpSubmenu: any = subMenuOpen;
  //   tmpSubmenu[menuName] = !tmpSubmenu[menuName];
  //   setSubMenuOpen(tmpSubmenu);
  // };

  return (
    <header className="d-flex flex-wrap justify-content-center align-content-center">
      <div className="container">
        <nav>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <button
            className="navbar-toggler md:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              dispatch(toggleMenuAction(!toggleMenu));
            }}
          />
          <div className="float-start">
            <Link legacyBehavior href={"https://www.strategykiln.com/"}>
              <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <Image
                  src="/images/logo.svg"
                  className="logo"
                  width="180"
                  height="32"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="" id="navbarExample01">
            <div
              className="float-end menu-line"
              style={{
                display:
                  toggleMenu || (width && width > 768) ? "block" : "none",
              }}
            >
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <span
                role="button"
                tabIndex={0}
                className="menu-close"
                onClick={() => dispatch(toggleMenuAction(false))}
              />
              <ul className="nav nav-pills nav-bg-top">
                <li
                  className={`nav-item ${
                    router.pathname == "/pages" ? "active" : ""
                  }`}
                >
                  <Link legacyBehavior href={"https://www.strategykiln.com/"}>
                    <a className="nav-link" aria-current="page">
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item nav-item-submenu ${
                    router.pathname == "/services" ? "active" : ""
                  } ${subMenuOpen["services"] ? "submenu-opened" : ""}`}
                >
                  <Link
                    legacyBehavior
                    href="https://www.strategykiln.com/services"
                  >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={`nav-link`}>
                      <span>Services</span>
                    </a>
                  </Link>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="toogle-arrow"
                    onClick={() => {
                      setOpenedSubmenu(
                        openedSubmenu === "services" ? "" : "services"
                      );
                    }}
                  ></span>
                  <ul
                    className={`submenu`}
                    style={{
                      display: openedSubmenu === "services" ? "block" : "none",
                    }}
                  >
                    <li>
                      <a href="https://www.strategykiln.com/business-coaching-service">
                        Coaching Services
                      </a>
                    </li>
                    <li>
                      <a href="https://www.strategykiln.com/business-consulting-service">
                        Consulting Services
                      </a>
                    </li>
                    <li>
                      <a href="https://www.strategykiln.com/schedule-service">
                        Schedule a Consultation
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item ${
                    router.pathname.includes("resources") ? "active" : ""
                  }`}
                >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link legacyBehavior href={""}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="nav-link">
                      <span>Resources</span>
                    </a>
                  </Link>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="toogle-arrow"
                    onClick={() => {
                      setOpenedSubmenu(
                        openedSubmenu === "resources" ? "" : "resources"
                      );
                    }}
                  ></span>
                  <ul
                    className={`submenu`}
                    style={{
                      display: openedSubmenu === "resources" ? "block" : "none",
                    }}
                  >
                    <li>
                      <a href="https://www.strategykiln.com/tools-and-frameworks">
                        Tools and Frameworks
                      </a>
                    </li>
                    <li>
                      <a href="https://www.strategykiln.com/video-library">
                        Video Library
                      </a>
                    </li>
                    <li>
                      <a href="https://www.strategykiln.com/e-books">E-books</a>
                    </li>
                    <li>
                      <a href="https://www.strategykiln.com/online-courses">
                        Online Courses
                      </a>
                    </li>
                    <li>
                      <a href="https://www.strategykiln.com/shop">Shop</a>
                    </li>
                    <li>
                      <Link href={"/resources/company"}>SWOT analysis</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="https://www.strategykiln.com/blog"
                    className="nav-link"
                  >
                    <span>Strategy Blog</span>
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    router.pathname == "/contact" ? "active" : ""
                  }`}
                >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="https://www.strategykiln.com/about"
                    className="nav-link"
                  >
                    <span>About</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
