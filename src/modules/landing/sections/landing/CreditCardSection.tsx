import videos from "../../../../assets/videos";

const CreditCardSection = () => {
  return (
    <div className="relative">
      <video
        src={videos.ccbpFold}
        autoPlay
        loop
        className="h-[556px] object-cover w-screen"
      ></video>
      <div className="absolute left-[130px] top-1/2 -translate-y-1/2">
        <div className="text-[90px] font-denton leading-[90px] font-extrabold text-left z-[2]">
          do more with <br />
          your credit cards
        </div>
        <div className="text-[22px] leading-[39px] text-left font-gilroy font-medium tracking-[0.5px] mt-[50px] z-[2] opacity-70">
          manage your credit cards better and improve your credit score: <br />
          receive payment reminders, uncover hidden fees, get spending <br />
          insights, and discover ways to maximize card benefits.
        </div>
      </div>
    </div>
  );
};

export default CreditCardSection;
