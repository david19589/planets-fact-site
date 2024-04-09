interface ChangeInfoProps {
  setInfoChange: React.Dispatch<React.SetStateAction<number>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  selectedPlanetIndex: number;
}

const ChangeInfo: React.FC<ChangeInfoProps> = ({
  setInfoChange,
  selected,
  setSelected,
  selectedPlanetIndex,
}) => {
  return (
    <div>
      <div className="desktop:mb-[70px] desktop:flex-col desktop:justify-center flex flex-row items-center mb-[27px]">
        <div className="hidden tablet:flex desktop:max-w-[350px] max-w-[281px] flex-wrap justify-center w-[100%]">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
                setInfoChange(index);
              }}
              className={`${
                selected === index
                  ? selectedPlanetIndex === 0
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
                  : selectedPlanetIndex === index
                  ? "hover:bg-gray-700"
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
                  : index === 2
                  ? "SURFACE GEOLOGY"
                  : null}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangeInfo;
