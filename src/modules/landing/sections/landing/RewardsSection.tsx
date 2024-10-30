import videos from "../../../../assets/videos";

const RewardsSection = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center flex-col w-[calc(100vw-15px)] max-w-screen">
      <video
        src={videos.rewardsDesktop}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-screen object-cover z-[1]"
      ></video>
      <div className="text-[114px] font-denton leading-[100px] font-extrabold text-center z-[2]">
        feel the odds fall <br />
        in your favor
      </div>
      <div className="text-[20px] leading-[34px] text-center font-gilroy font-medium tracking-[0.5px] mt-[60px] z-[2] opacity-70 max-w-[50vw]">
        unlock cashback, exclusive rewards from select brands, and special
        access to curated products and experiences.
      </div>
    </div>
  );
};

export default RewardsSection;
