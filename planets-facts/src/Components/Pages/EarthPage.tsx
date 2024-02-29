import UsePlanetData from "../UsePlanetData";
import UseInfo from "../UseInfo";
import "../NewApp.css";
import styles from "./EarthPage.module.css";
import earthImg from "../assets/planet-earth.svg";
import earthInternalImg from "../assets/planet-earth-internal.svg";
import geologyEarth from "../assets/geology-earth.png";

function EarthPage() {
  const planetData = UsePlanetData("Earth");
  const { infoData, changeInfo, handleChangeInfo } = UseInfo(
    "Earth",
    "overview"
  );

  return (
    <div className="main">
      {/* This content will only appear on the mobile version. When the screen width is less than 600 2 */}
      <div className="onlyForMobileScreen">
        <p
          className={`${"infoMenuForMobileScreen"} ${
            changeInfo === "overview"
              ? styles.markedOverviewForMobileScreen
              : styles.overviewForMobileScreenHover
          } `}
          onClick={() => handleChangeInfo("overview")}
        >
          OVERVIEW
        </p>

        <p
          className={`${"infoMenuForMobileScreen"} ${
            changeInfo === "structure"
              ? styles.markedStructureForMobileScreen
              : styles.structureForMobileScreenHover
          } `}
          onClick={() => handleChangeInfo("structure")}
        >
          STRUCTURE
        </p>

        <p
          className={`${"infoMenuForMobileScreen"} ${
            changeInfo === "geology"
              ? styles.markedGeologyForMobileScreen
              : styles.geologyForMobileScreenHover
          } `}
          onClick={() => handleChangeInfo("geology")}
        >
          GEOLOGY
        </p>
      </div>
      {/*  */}

      <div className="parentBodyContainer">
        <div className="bodyContainer">
          <div className="planetImgContainer">
            <img
              className={styles.earthImg}
              src={changeInfo === "structure" ? earthInternalImg : earthImg}
              alt="earth"
            />

            {changeInfo === "geology" ? (
              <img
                className="geologySurface"
                src={changeInfo === "geology" ? geologyEarth : ""}
                alt="geology-earth"
              />
            ) : (
              ""
            )}
          </div>

          <div className="planetInfoContainer">
            <div className="info">
              <h1 className="planetName">
                {planetData?.name.toUpperCase() || "Earth"}
              </h1>

              <p>{infoData?.content || "No information available"}</p>

              <p className="source">
                Source:{" "}
                <a
                  href={infoData?.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </p>
            </div>

            <div className="planetInfoMenu">
              <div
                className={`${"infoMenu"} ${
                  changeInfo === "overview" ? styles.markedOverview : "overview"
                } `}
                onClick={() => handleChangeInfo("overview")}
              >
                <span>01</span> OVERVIEW
              </div>

              <div
                className={`${"infoMenu"} ${
                  changeInfo === "structure"
                    ? styles.markedStructure
                    : "structure"
                } `}
                onClick={() => handleChangeInfo("structure")}
              >
                <span>02</span> INTERNAL STRUCTURE
              </div>

              <div
                className={`${"infoMenu"} ${
                  changeInfo === "geology" ? styles.markedGeology : "geology"
                } `}
                onClick={() => handleChangeInfo("geology")}
              >
                <span>03</span> SURFACE GEOLOGY
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentParameterContiner">
        <div className="parameterContiner">
          <div className="parameter">
            <p>ROTATION TIME</p>
            <h1>{planetData?.rotation}</h1>
          </div>
          <div className="parameter">
            <p>REVOLUTION TIME</p>
            <h1>{planetData?.revolution}</h1>
          </div>
          <div className="parameter">
            <p>RADIUS</p>
            <h1>{planetData?.radius}</h1>
          </div>
          <div className="parameter">
            <p>AVERAGE TEMP</p>
            <h1>{planetData?.temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthPage;
