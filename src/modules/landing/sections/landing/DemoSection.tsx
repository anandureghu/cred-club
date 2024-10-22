import React from "react";
import videos from "../../../../assets/videos";

const DemoSection = () => {
  return (
    <div>
      <video src={videos.phoneTicker} autoPlay muted></video>
      <div className="mb-[200px]">
        <div className="text-[114px] font-denton leading-[100px] font-extrabold text-center z-[2]">
          all that you deserve. <br />
          and some more.
        </div>
        <div className="text-[20px] leading-[34px] text-center font-gilroy font-medium tracking-[0.5px] mt-[50px] z-[2]">
          if you're a CRED member, you're already a step ahead. every <br /> the
          experience you unlock takes you higher up the pedestal.
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
