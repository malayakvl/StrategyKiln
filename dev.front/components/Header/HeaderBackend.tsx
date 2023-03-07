import Image from "next/image";
import Link from "next/link";
// import "./FileItem.scss";
import { useRouter } from "next/router";

const HeaderBackend: React.FC = () => {
  const router = useRouter();

  return (
    <header className="d-flex flex-wrap justify-content-center align-content-center">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            href=":;"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="float-start">
            <Link legacyBehavior href={"/pages"}>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarExample01"
          >
            <div className="float-end menu-line">
              <ul className="nav nav-pills nav-bg-top">
                <li
                  className={`nav-item ${
                    router.pathname == "/pages" ? "active" : ""
                  }`}
                >
                  <Link legacyBehavior href={"/pages  "}>
                    <a className="nav-link" aria-current="page">
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    router.pathname == "/services" ? "active" : ""
                  }`}
                >
                  <Link legacyBehavior href={"/services"}>
                    <a href=":;" className="nav-link">
                      <span>Services</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    router.pathname.includes("resourceForms") ? "active" : ""
                  }`}
                >
                  <Link legacyBehavior href={"/resourceForms/company"}>
                    <a href=":;" className="nav-link">
                      <span>Resources</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href=":;" className="nav-link">
                    <span>Startagy Blog</span>
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    router.pathname == "/contact" ? "active" : ""
                  }`}
                >
                  <a href=":;" className="nav-link">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBackend;
