interface types {
  revolution: string;
  rotation: string;
  radius: string;
  temperature: string;
}

function Info(props: { planetObj: types }) {
  return (
    <div>
      <div>
        <div className="mb-[16px] w-[100%] flex flex-wrap justify-center">
          <div className="desktop:mr-[30px] desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:flex tablet:justify-normal tablet:items-start tablet:flex-col tablet:w-[162px] tablet:mr-[11px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px] mb-[8px] flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
            <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
              ROTATION TIME
            </h1>
            <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
              {props.planetObj?.rotation}
            </span>
          </div>
          <div className="desktop:mr-[30px] desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:flex tablet:justify-normal tablet:items-start tablet:flex-col tablet:w-[162px] tablet:mr-[11px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px]mb-[8px] flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
            <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
              REVOLUTION TIME
            </h1>
            <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
              {props.planetObj?.revolution}
            </span>
          </div>
          <div className="desktop:mr-[30px] desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:justify-normal tablet:flex tablet:items-start tablet:flex-col tablet:w-[162px] tablet:mr-[11px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px] mb-[8px] flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
            <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
              RADIUS
            </h1>
            <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
              {props.planetObj?.radius}
            </span>
          </div>
          <div className="desktop:w-[255px] desktop:pt-[20px] desktop:pb-[27px] desktop:pl-[23px] tablet:mb-0 tablet:flex tablet:justify-normal tablet:items-start tablet:flex-col tablet:w-[162px] tablet:pl-[15px] tablet:tl-[16px] tablet:pb-[19px] mb-[8px]  flex items-center w-[327px] justify-between px-[24px] pt-[9px] pb-[13px] border-[1px] border-slate-700">
            <h1 className="desktop:text-[11px] desktop:leading-[25px] desktop:tracking-[1px] mr-[10px] text-white opacity-50 font-Spartan font-[700] text-[8px] leading-[16px] tracking-[0.73px]">
              AVERAGE TEMP.
            </h1>
            <span className="desktop:text-[38px] desktop:leading-[51.76px] desktop:tracking-[-1.5px] text-white font-Antonio font-[400] text-[20px] leading-[25.88px]">
              {props.planetObj?.temperature}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
