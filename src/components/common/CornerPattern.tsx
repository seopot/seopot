type CornerPatternProps = {
  borderColor: string;
};

const CornerPattern = ({ borderColor }: CornerPatternProps) => {
  return (
    <>
      <div className="absolute -top-0.5 -left-0.5">
        <div className="flex">
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
          <div className={`w-3 h-4 sm:w-4 sm:h-5 border-b-2 ${borderColor}`} />
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
        </div>
        <div className="flex">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-t-0 ${borderColor}`} />
          <div
            className={`w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] border-2 border-t-0 border-l-0 ${borderColor}`}
          />
        </div>
        <div className="flex">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-t-0 ${borderColor}`} />
        </div>
      </div>
      <div className="absolute -top-0.5 -right-0.5">
        <div className="flex">
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
          <div className={`w-3 h-4 sm:w-4 sm:h-5 border-b-2 ${borderColor}`} />
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
        </div>
        <div className="flex justify-end">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-t-0 ${borderColor}`} />
          <div
            className={`w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] border-2 border-t-0 border-l-0 ${borderColor}`}
          />
        </div>
        <div className="flex justify-end">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-t-0 ${borderColor}`} />
        </div>
      </div>
      <div className="absolute -bottom-0.5 -left-0.5">
        <div className="flex">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-b-0 ${borderColor}`} />
        </div>
        <div className="flex">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-b-0  ${borderColor}`} />
          <div
            className={`w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] border-2 border-b-0 border-l-0 ${borderColor}`}
          />
        </div>
        <div className="flex">
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
          <div className={`w-3 h-4 sm:w-4 sm:h-5 border-t-2 ${borderColor}`} />
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
        </div>
      </div>
      <div className="absolute -bottom-0.5 -right-0.5">
        <div className="flex justify-end">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-b-0 ${borderColor}`} />
        </div>
        <div className="flex justify-end">
          <div className={`w-4 h-[14px] sm:w-5 sm:h-[18px] border-2 border-b-0  ${borderColor}`} />
          <div
            className={`w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] border-2 border-b-0 border-l-0 ${borderColor}`}
          />
        </div>
        <div className="flex">
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
          <div className={`w-3 h-4 sm:w-4 sm:h-5 border-t-2 ${borderColor}`} />
          <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${borderColor}`} />
        </div>
      </div>
    </>
  );
};

export default CornerPattern;
