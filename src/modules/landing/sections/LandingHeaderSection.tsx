import logo from "../../../assets/logo.svg";
import credMoney from "../../../assets/icons/cred-money.svg";
import videos from "../../../assets/videos";

const LandingHeaderSection = () => {
  return (
    <main className="h-screen flex items-center justify-center flex-col relative">
      <video
        src={videos.heroDesktop}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-screen object-cover z-[1]"
      ></video>
      <div className="absolute top-[70px] px-[130px] flex justify-between w-screen items-center z-[2]">
        <img src={logo} alt="logo" />
        <div className="border-[1px] border-[rgba(255,255,255,0.2)] flex items-center ">
          <div className="border-r-[1px] border-[rgba(255,255,255,0.2)]">
            <img
              src={credMoney}
              alt="cred-money"
              className=" px-[30px] py-[20px]"
            />
          </div>
          <div className="px-[30px] py-[20px] flex items-center justify-center flex-col gap-[8px]">
            {new Array(3).fill(0).map(() => {
              return <div className="w-[22px] h-[2px] bg-light-950"></div>;
            })}
          </div>
        </div>
      </div>
      <div className="text-[114px] font-denton leading-[100px] font-extrabold text-center z-[2]">
        crafted for the <br />
        creditworthy
      </div>
      <div className="text-[20px] leading-[34px] text-center font-gilroy font-medium tracking-[0.5px] mt-5 z-[2]">
        CRED is a members-only club that enables <br /> the trustworthy to make
        a financial progress
      </div>
    </main>
  );
};

export default LandingHeaderSection;
