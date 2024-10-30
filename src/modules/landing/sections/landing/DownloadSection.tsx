import images from "../../../../assets/images";
import DownloadCred from "../../../../components/DownloadCred";

const DownloadSection = () => {
  return (
    <div className="h-screen relative">
      <img
        src={images.ctaFoldFinal}
        alt="download"
        className="absolute left-0 top-0 w-screen h-screen"
      />
      <div className="flex justify-between relative">
        <div></div>
        <div className="flex h-screen w-1/2 flex-col justify-center pr-[11%] gap-[50px]">
          <DownloadCred />
          <div className="font-denton text-[112px] font-bold leading-[108px]">
            not everyone <br /> gets it
          </div>
          <div className="text-[22px] leading-[39px] tracking-[0.5px] font-gilroy">
            like all good things in life, earning a CRED membership is not easy;
            but the possibility of unlocking a greater future makes the effort
            worthwhile.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
