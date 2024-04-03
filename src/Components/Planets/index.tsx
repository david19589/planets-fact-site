import Menu from "/src/assets/icon-hamburger.svg";
import SourceIcon from "/src/assets/icon-source.svg";
import Data from "../data.json";
import { useState } from "react";

function Planets() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [number, setNumber] = useState(0);

  const handleClick = (index: number) => {
    setNumber(index++);
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
          {open === true ? (
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
                  <h1
                    onClick={() => {
                      handleClick(index);
                      setOpen(false);
                    }}
                    className="cursor-pointer w-[85px] text-white text-[15px] font-Spartan font-[700] leading-[25px] tracking-[1.36px] mb-[20px]"
                  >
                    {title}
                  </h1>
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
                  handleClick(index);
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
                      ? "left-[-2px] "
                      : index === 1
                      ? "left-[-13px] "
                      : index === 2
                      ? "left-[-13px] "
                      : index === 3
                      ? "left-[-15px] "
                      : index === 4
                      ? "left-[-7px] "
                      : index === 5
                      ? "left-[-8px] "
                      : index === 6
                      ? "left-[-8px] "
                      : index === 7
                      ? "left-[-5px] "
                      : ""
                  }hidden tablet:hidden desktop:flex absolute top-[-25px] z-10 w-[68px] h-[4px] bg-[#419EBB]`}
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
                  onClick={() => setPosition(index)}
                  className={`transition-all duration-[0.3s] font-Spartan cursor-pointer text-white text-[9px] font-[700] leading-[10.08px] tracking-[1.93px] ${
                    position !== index ? "hover:opacity-90" : ""
                  }`}
                >
                  {title}
                </h1>
                {position === index && (
                  <span
                    className={`${
                      index === 2 ? "left-[-14px] " : ""
                    }absolute left-[-8px] bottom-[-21px] z-10 flex w-[80px] h-[4px] bg-[#419EBB]`}
                  ></span>
                )}
              </div>
            ))}
          </div>
          <span className="flex bg-white w-[100%] h-[1px] opacity-[20%]"></span>
        </div>
      </div>
      <div>
        {Data.slice(number).map((item, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                className="tablet:px-[40px] flex flex-col items-center px-[24px]"
              >
                <div className="desktop:flex desktop:flex-row tablet:flex tablet:items-center flex flex-col items-center">
                  <img
                    className="desktop:mr-[300px] desktop:w-[290px] desktop:h-[290px] desktop:mb-0 mb-[98px] tablet:w-[186px] w-[111px]"
                    src={item.images.planet}
                    alt={item.name}
                  />
                  <div className="desktop:mb-[87px] desktop:flex-col desktop:justify-center flex flex-row items-center mb-[27px]">
                    <div className="desktop:flex-row tablet:mb-0 tablet:flex tablet:items-center tablet:flex-row tablet:max-w-[100%] mb-[28px] max-w-[327px] flex flex-col items-center">
                      <div className="desktop:mr-0 tablet:mr-[69px] tablet:items-start flex flex-col items-center max-w-[339px]">
                        <h1 className="desktop:text-[80px] desktop:leading-[103.52px] tablet:text-start tablet:text-[48px] tablet:leading-[62.11px] tablet:mb-[24px] font-Antonio mb-[16px] text-center text-white text-[40px] font-[400] leading-[51.76px]">
                          {item.name}
                        </h1>
                        <p className="desktop:h-[150px] tablet:h-[105px] h-[110px] desktop:text-[14px] desktop:leading-[25px] tablet:text-start font-Spartan mb-[32px] text-center text-white text-[11px] font-[400] leading-[22px]">
                          {item.overview.content}
                        </p>
                        <div className="mb-[28px] text-white flex items-center">
                          <h2 className="desktop:text-[14px] desktop:leading-[25px] opacity-[50%] font-Spartan font-[400] text-[12px] leading-[25px]">
                            Source :
                          </h2>
                          <a
                            href={item.overview.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="desktop:text-[14px] desktop:leading-[25px] flex items-center underline ml-[5px] font-Spartan font-[700] text-[12px] leading-[25px] opacity-[50%] hover:opacity-70"
                          >
                            Wikipedia
                            <img src={SourceIcon} alt="SourceIcon" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hidden tablet:flex desktop:max-w-[350px] max-w-[281px] flex-wrap justify-center w-[100%]">
                      {[0, 1, 2].map((index) => (
                        <div
                          key={index}
                          onClick={() => setSelected(index)}
                          className={`${
                            selected === index
                              ? "bg-[#419EBB] "
                              : selected !== index
                              ? "hover:bg-gray-700 "
                              : ""
                          }transition-all duration-[0.3s] desktop:w-[350px] cursor-pointer mb-[16px] w-[281px] flex pl-[20px] pt-[8px] pb-[7px] border-[1px] border-slate-700`}
                        >
                          <span className="desktop:text-[12px] desktop:tracking-[2.57px] opacity-50 mr-[17px] text-white font-Spartan font-[700] text-[9px] leading-[25px] tracking-[1.93px]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h1 className="desktop:text-[12px] desktop:tracking-[2.57px] text-white font-Spartan font-[700] text-[9px] leading-[25px] tracking-[1.93px]">
                            {index === 0
                              ? "OVERVIEW"
                              : index === 1
                              ? "INTERNAL STRUCTURE"
                              : "SURFACE GEOLOGY"}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="desktop:mb-[6px] mb-[16px] w-[100%] flex flex-wrap justify-center">
                  <div className="desktop:mr-[30px] desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:flex tablet:justify-normal tablet:items-start tablet:flex-col tablet:w-[162px] tablet:mr-[11px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px] mb-[8px] flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
                    <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
                      ROTATION TIME
                    </h1>
                    <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
                      {item.rotation}
                    </span>
                  </div>
                  <div className="desktop:mr-[30px] desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:flex tablet:justify-normal tablet:items-start tablet:flex-col tablet:w-[162px] tablet:mr-[11px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px]mb-[8px] flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
                    <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
                      REVOLUTION TIME
                    </h1>
                    <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
                      {item.revolution}
                    </span>
                  </div>
                  <div className="desktop:mr-[30px] desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:justify-normal tablet:flex tablet:items-start tablet:flex-col tablet:w-[162px] tablet:mr-[11px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px] mb-[8px] flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
                    <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
                      RADIUS
                    </h1>
                    <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
                      {item.radius}
                    </span>
                  </div>
                  <div className="desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:flex tablet:justify-normal tablet:items-start tablet:flex-col tablet:w-[162px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px] mb-[8px]  flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
                    <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
                      AVERAGE TEMP.
                    </h1>
                    <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
                      {item.temperature}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Planets;
