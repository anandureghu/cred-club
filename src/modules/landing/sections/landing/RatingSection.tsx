import images from "../../../../assets/images";

const RatingSection = () => {
  const ratings = [
    { rating: 4.8, label: "app store" },
    { rating: 4.8, label: "play store" },
  ];
  return (
    <div
      style={{
        borderImage:
          "linear-gradient(to right,rgb(0, 0, 0), rgb(74, 73, 73), rgb(0, 0, 0)) 1/1/0 stretch",
      }}
      className="border border-solid py-[100px] flex items-center justify-between px-[14%]"
    >
      <div>
        <span className="uppercase font-gilroy tracking-[4.5px] text-[16px] mb-[10px] font-bold">
          trusted by 15m members
        </span>
        <div className="font-denton text-[96px] leading-[95px]">
          the proof <br />
          writes itself
        </div>
      </div>
      <div className="flex items-center gap-[60px]">
        {ratings.map((rating) => {
          return (
            <div>
              <img src={images.ratingStars} alt="rating" className="h-[25px]" />
              <div>
                <span className="text-[95px] font-gilroy font-bold m-0 p-0">
                  {rating.rating}
                </span>
                <span className="text-[50px] font-bold font-gilroy text-light-950 opacity-40">
                  /5
                </span>
              </div>
              <span className="text-[20px] uppercase text-light-950 opacity-40 tracking-[9px] font-bold">
                {rating.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingSection;
