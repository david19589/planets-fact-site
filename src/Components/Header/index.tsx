import Menu from "/src/assets/icon-hamburger.svg";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface HeaderProps {
  setInfoChange: React.Dispatch<React.SetStateAction<number>>;
  selectedPlanetIndex: number;
  setSelectedPlanetIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({
  setInfoChange,
  selectedPlanetIndex,
  setSelectedPlanetIndex,
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [position2, setPosition2] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const { planet: currentPlanet } = useParams<{ planet: string }>();

  const planets: string[] = useMemo(
    () => [
      "MERCURY",
      "VENUS",
      "EARTH",
      "MARS",
      "JUPITER",
      "SATURN",
      "URANUS",
      "NEPTUNE",
    ],
    []
  );

  useEffect(() => {
    const planetRoutes = [
      "/planet/mercury",
      "/planet/venus",
      "/planet/earth",
      "/planet/mars",
      "/planet/jupiter",
      "/planet/saturn",
      "/planet/uranus",
      "/planet/neptune",
    ];

    const index = planetRoutes.findIndex(
      (route) => route === location.pathname
    );
    if (index !== -1) {
      setSelectedPlanetIndex(index);
    }
  }, [location.pathname, setSelectedPlanetIndex]);

  useEffect(() => {
    const index = planets.findIndex(
      (p) => p.toLowerCase() === currentPlanet?.toLowerCase()
    );
    if (index !== -1) {
      setPosition2(index);
    }
  }, [currentPlanet, planets, setPosition2]);

  const handlePlanetClick = (index: number) => {
    setOpen(false);
    navigate(`/planet/${planets[index].toLowerCase()}`);
  };

  return (
    <div>
      <div className="desktop:flex desktop:justify-between desktop:items-center">
        <div className="desktop:flex desktop:flex-row desktop:pt-[22px] tablet:flex tablet:flex-col tablet:items-center tablet:pt-[37px] tablet:px-[40px] px-[24px] py-[16px] flex justify-between items-center">
          <h1 className="desktop:mb-0 tablet:mb-[39px] font-Antonio text-white text-[28px] font-[400] leading-[36.23px] tracking-[-1.05px]">
            THE PLANETS
          </h1>
          {open ? (
            <img
              onClick={() => {
                setOpen(false);
              }}
              className="tablet:hidden opacity-[40%] cursor-pointer"
              src={Menu}
              alt="menu"
            />
          ) : (
            <img
              className="tablet:hidden cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
              src={Menu}
              alt="menu"
            />
          )}
          {open ? (
            <div className="px-[24px] pt-[44px] pb-[67px] flex flex-col tablet:hidden absolute overflow-hidden left-0 top-[69px] right-0 bottom-[-230px] bg-[#070724] z-20">
              {[
                "MERCURY",
                "VENUS",
                "EARTH",
                "MARS",
                "JUPITER",
                "SATURN",
                "URANUS",
                "NEPTUNE",
              ].map((title, index) => (
                <div key={index}>
                  <div
                    onClick={() => {
                      handlePlanetClick(index);
                      setSelectedPlanetIndex(index);
                    }}
                    className="flex w-fit"
                  >
                    <span
                      className={`flex w-[20px] h-[20px] mr-[25px] rounded-full ${
                        index === 0
                          ? "bg-[#DEF4FC]"
                          : index === 1
                          ? "bg-[#F7CC7F]"
                          : index === 2
                          ? "bg-[#545BFE]"
                          : index === 3
                          ? "bg-[#FF6A45]"
                          : index === 4
                          ? "bg-[#ECAD7A]"
                          : index === 5
                          ? "bg-[#FCCB6B]"
                          : index === 6
                          ? "bg-[#65F0D5]"
                          : index === 7
                          ? "bg-[#497EFA]"
                          : ""
                      }`}
                    ></span>
                    <h1 className="cursor-pointer w-[85px] text-white text-[15px] font-Spartan font-[700] leading-[25px] tracking-[1.36px] mb-[20px]">
                      {title}
                    </h1>
                  </div>
                  <span className="flex w-[100%] h-[1px] bg-white opacity-[10%] mb-[20px]"></span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="desktop:mb-0 hidden tablet:flex tablet:flex-row tablet:justify-center tablet:mb-[27px]">
          {[
            "MERCURY",
            "VENUS",
            "EARTH",
            "MARS",
            "JUPITER",
            "SATURN",
            "URANUS",
            "NEPTUNE",
          ].map((title, index) => (
            <div key={index} className="relative hidden tablet:flex">
              <h1
                onClick={() => {
                  setPosition2(index);
                  handlePlanetClick(index);
                  setSelectedPlanetIndex(index);
                }}
                className={`transition-all duration-[0.3s] font-Spartan text-white mr-[33px] cursor-pointer font-[700] text-[11px] leading-[25px] tracking-[1px] ${
                  position2 === index ? "opacity-100" : "opacity-70"
                } ${position2 !== index && "hover:opacity-90"}`}
              >
                {title}
              </h1>
              {position2 === index && (
                <span
                  className={`${
                    index === 0
                      ? "left-[-2px] bg-[#419EBB] "
                      : index === 1
                      ? "left-[-13px] bg-[#EDA249] "
                      : index === 2
                      ? "left-[-13px] bg-[#6D2ED5] "
                      : index === 3
                      ? "left-[-15px] bg-[#D14C32] "
                      : index === 4
                      ? "left-[-7px] bg-[#D83A34] "
                      : index === 5
                      ? "left-[-8px] bg-[#CD5120] "
                      : index === 6
                      ? "left-[-8px] bg-[#1EC1A2] "
                      : index === 7
                      ? "left-[-5px] bg-[#2D68F0] "
                      : ""
                  }hidden tablet:hidden desktop:flex absolute top-[-25px] z-10 w-[68px] h-[4px]`}
                ></span>
              )}
            </div>
          ))}
        </div>
      </div>
      <span className="desktop:mb-[120px] tablet:mb-[146px] flex bg-white w-[100%] h-[1px] opacity-[20%]"></span>
      <div className="tablet:hidden mb-[95px]">
        <div className="tablet:hidden mb-[95px]">
          <div className="tablet:px-[40px] px-[24px] py-[20px] flex justify-between">
            {["OVERVIEW", "Structure", "Surface"].map((title, index) => (
              <div key={index} className="relative">
                <h1
                  onClick={() => {
                    setPosition(index);
                    setInfoChange(index);
                  }}
                  className={`transition-all duration-[0.3s] font-Spartan cursor-pointer text-white text-[9px] font-[700] leading-[10.08px] tracking-[1.93px] text-center w-[58px] ${
                    position !== index ? "hover:opacity-90" : ""
                  }`}
                >
                  {title}
                </h1>
                {position === index && (
                  <span
                    className={`${
                      selectedPlanetIndex === 0
                        ? "bg-[#419EBB] "
                        : selectedPlanetIndex === 1
                        ? "bg-[#EDA249] "
                        : selectedPlanetIndex === 2
                        ? "bg-[#6D2ED5] "
                        : selectedPlanetIndex === 3
                        ? "bg-[#D14C32] "
                        : selectedPlanetIndex === 4
                        ? "bg-[#D83A34] "
                        : selectedPlanetIndex === 5
                        ? "bg-[#CD5120] "
                        : selectedPlanetIndex === 6
                        ? "bg-[#1EC1A2] "
                        : selectedPlanetIndex === 7
                        ? "bg-[#2D68F0] "
                        : ""
                    }absolute bottom-[-21px] z-10 flex w-[80px] h-[4px] left-[-9px]`}
                  ></span>
                )}
              </div>
            ))}
          </div>
          <span className="flex bg-white w-[100%] h-[1px] opacity-[20%]"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
