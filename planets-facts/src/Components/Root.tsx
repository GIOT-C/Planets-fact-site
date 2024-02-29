import { useState } from "react";
import styles from "./Root.module.css";
import { Link, Outlet } from "react-router-dom";

function Root() {
  const [selectMarked, setSelectMarked] = useState<string>("");
  const [menuBarForMobile, setMenuBarForMobile] = useState<boolean>(true);

  const handlePlanetClick = (planet: string) => {
    setSelectMarked(planet);
    setMenuBarForMobile(false);
  };

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <h1 className={selectMarked === "home" ? styles.default : ""}>
            <Link
              className={`${styles.link} ${styles.linkForMobile}`}
              to="/"
              onClick={() => {
                setSelectMarked("home");
                setMenuBarForMobile(true);
              }}
            >
              <span>THE PLANETS</span>{" "}
              <span
                className={`${styles.menuBar} ${
                  menuBarForMobile ? "" : styles.menuBarInActive
                }`}
              >
                <i className="fa-solid fa-bars"></i>
              </span>
            </Link>
          </h1>

          <ul className={menuBarForMobile ? "" : styles.displayNone}>
            <li
              className={selectMarked === "mercury" ? styles.mercuryClass : ""}
            >
              <span className={`${styles.mercuryCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/mercury"
                onClick={() => handlePlanetClick("mercury")}
              >
                MERCURY{" "}
              </Link>
            </li>

            <li className={selectMarked === "venus" ? styles.venusClass : ""}>
              <span className={`${styles.venusCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/venus"
                onClick={() => handlePlanetClick("venus")}
              >
                VENUS
              </Link>
            </li>

            <li className={selectMarked === "earth" ? styles.earthClass : ""}>
              <span className={`${styles.earthCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/earth"
                onClick={() => handlePlanetClick("earth")}
              >
                EARTH
              </Link>
            </li>

            <li className={selectMarked === "mars" ? styles.marsClass : ""}>
              <span className={`${styles.marsCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/mars"
                onClick={() => handlePlanetClick("mars")}
              >
                MARS
              </Link>
            </li>

            <li
              className={selectMarked === "jupiter" ? styles.jupiterClass : ""}
            >
              <span className={`${styles.jupiterCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/jupiter"
                onClick={() => handlePlanetClick("jupiter")}
              >
                JUPITER
              </Link>
            </li>

            <li className={selectMarked === "saturn" ? styles.saturnClass : ""}>
              <span className={`${styles.saturnCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/saturn"
                onClick={() => handlePlanetClick("saturn")}
              >
                {" "}
                SATURN
              </Link>
            </li>

            <li className={selectMarked === "uranus" ? styles.uranusClass : ""}>
              <span className={`${styles.uranusCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/uranus"
                onClick={() => handlePlanetClick("uranus")}
              >
                URANUS
              </Link>
            </li>

            <li
              className={selectMarked === "neptune" ? styles.neptuneClass : ""}
            >
              <span className={`${styles.neptuneCircle} ${styles.circle}`}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <Link
                className={styles.link}
                to="/neptune"
                onClick={() => handlePlanetClick("neptune")}
              >
                NEPTUNE
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
