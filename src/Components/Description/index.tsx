import SourceIcon from "/src/assets/icon-source.svg";

interface types {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
  };
  geology: {
    content: string;
  };
}

function Description(props: { infoChange: number; planetObj: types }) {
  return (
    <div className="flex justify-center">
      <div className="desktop:flex-row tablet:mb-0 tablet:flex tablet:items-center tablet:flex-row tablet:max-w-[100%] mb-[28px] max-w-[327px] flex flex-col items-center">
        <div className="desktop:mr-0 tablet:mr-[69px] tablet:items-start flex flex-col items-center max-w-[339px]">
          <h1 className="desktop:text-[80px] desktop:leading-[103.52px] tablet:text-start tablet:text-[48px] tablet:leading-[62.11px] tablet:mb-[24px] font-Antonio mb-[16px] text-center text-white text-[40px] font-[400] leading-[51.76px]">
            {props.planetObj?.name}
          </h1>
          {props.infoChange === 0 ? (
            <p className="desktop:h-[150px] tablet:h-[105px] h-[110px] desktop:text-[14px] desktop:leading-[25px] tablet:text-start font-Spartan mb-[16px] text-center text-white text-[11px] font-[400] leading-[22px]">
              {props.planetObj?.overview.content}
            </p>
          ) : props.infoChange === 1 ? (
            <p className="desktop:h-[150px] tablet:h-[105px] h-[110px] desktop:text-[14px] desktop:leading-[25px] tablet:text-start font-Spartan mb-[16px] text-center text-white text-[11px] font-[400] leading-[22px]">
              {props.planetObj?.structure.content}
            </p>
          ) : props.infoChange === 2 ? (
            <p className="desktop:h-[150px] tablet:h-[105px] h-[110px] desktop:text-[14px] desktop:leading-[25px] tablet:text-start font-Spartan mb-[16px] text-center text-white text-[11px] font-[400] leading-[22px]">
              {props.planetObj?.geology.content}
            </p>
          ) : null}

          <div className="mb-[28px] text-white flex items-center">
            <h2 className="desktop:text-[14px] desktop:leading-[25px] opacity-[50%] font-Spartan font-[400] text-[12px] leading-[25px]">
              Source :
            </h2>
            <a
              href={props.planetObj?.overview.source}
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
    </div>
  );
}

export default Description;
