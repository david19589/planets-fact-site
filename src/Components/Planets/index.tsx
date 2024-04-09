import Data from "../data.json";
import Description from "../Description";
import Info from "../Info";
import ChangeInfo from "../ChangeInfo";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Planets() {
  const [selected, setSelected] = useState(0);
  const [infoChange, setInfoChange] = useState(0);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);

  const { planet } = useParams();
  const planetName = planet ? planet : "";
  const planetObj = Data.find(
    (item) => item.name.toLowerCase() === planetName.toLowerCase()
  );

  return (
    <div>
      {planetObj && (
        <Header
          setInfoChange={setInfoChange}
          selectedPlanetIndex={selectedPlanetIndex}
          setSelectedPlanetIndex={setSelectedPlanetIndex}
        />
      )}
      <div className="desktop:flex desktop:flex-row desktop:justify-center">
        <div>
          <div className="tablet:px-[40px] flex flex-col items-center px-[24px]">
            {planetObj && (
              <div className="desktop:flex desktop:flex-row tablet:flex tablet:items-center flex flex-col items-center">
                {infoChange === 0 ? (
                  <img
                    className="desktop:mr-[300px] desktop:w-[290px] desktop:h-[290px] desktop:mb-0 mb-[98px] tablet:w-[186px] w-[111px]"
                    src={planetObj?.images.planet}
                    alt={planetObj?.name}
                  />
                ) : infoChange === 1 ? (
                  <img
                    className="desktop:mr-[300px] desktop:w-[290px] desktop:h-[290px] desktop:mb-0 mb-[98px] tablet:w-[186px] w-[111px]"
                    src={planetObj?.images.internal}
                    alt={planetObj?.name}
                  />
                ) : infoChange === 2 ? (
                  <div className="relative flex">
                    <img
                      className="desktop:mr-[300px] desktop:w-[290px] desktop:h-[290px] desktop:mb-0 mb-[98px] tablet:w-[186px] w-[111px]"
                      src={planetObj?.images.planet}
                      alt={planetObj?.name}
                    />
                    <img
                      className="desktop:w-[158px] absolute desktop:left-[66px] desktop:bottom-[-83px] tablet:w-[120px] tablet:bottom-[25px] tablet:left-[34px] bottom-[55px] left-[21px] w-[70px]"
                      src={planetObj?.images.geology}
                      alt={planetObj?.name}
                    />
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
        {planetObj && (
          <div className="desktop:flex-col tablet:flex tablet:flex-row tablet:justify-center tablet:items-center">
            <Description planetObj={planetObj} infoChange={infoChange} />
            <ChangeInfo
              selected={selected}
              setSelected={setSelected}
              setInfoChange={setInfoChange}
              selectedPlanetIndex={selectedPlanetIndex}
            />
          </div>
        )}
      </div>
      {planetObj && (
        <div className="desktop:flex desktop:flex-col desktop:justify-center desktop:items-center">
          <Info planetObj={planetObj} />
        </div>
      )}
    </div>
  );
}

export default Planets;
