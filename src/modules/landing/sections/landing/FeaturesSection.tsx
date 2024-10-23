import images from "../../../../assets/images";

const FeaturesSection = () => {
  const features = [
    {
      title: ["scan & pay", "any UPI QR"],
      background: images.scanNPay,
      icon: images.snpLogo,
    },
    {
      title: ["UPI payments.", "on credit."],
      background: images.ccOnUpi,
      icon: images.rupayLogo,
    },
    {
      title: ["tap your phone.", "pay on credit."],
      background: images.tapNpay,
      icon: images.tnpLogo,
    },
    {
      title: ["send money to", "any UPI app"],
      background: images.p2p,
      icon: images.p2pLogo,
    },
    {
      title: ["manage your", "cars' vitals"],
      background: images.garage,
      icon: images.garageLogo,
    },
    {
      title: ["travel, curated", "for members"],
      background: images.escapes,
      icon: images.escapesLogo,
    },
  ];
  return (
    <div className="mb-[200px]">
      <div className="text-[90px] font-denton leading-[92px] font-extrabold text-left z-[2] mt-[350px] ml-[124px] mb-[100px]">
        upgrade your life. <br />
        bit by bit.
      </div>
      <div className="flex items-start px-[124px] no-wrap w-full gap-[20px] overflow-x-auto overflow-y-hidden scroll-hide">
        {features.map((feature) => {
          return (
            <div
              key={feature.title[0]}
              className="h-[75vh] border-[0.5px] border-[#d3d3d340]  pt-[60px] pr-[60px] pl-[40px] bg-transparent bg-cover bg-bottom min-w-[28vw]"
              style={{ backgroundImage: `url(${feature.background})` }}
            >
              <img
                src={feature.icon}
                alt={feature.title[0]}
                className="h-[30px] object-contain"
              />
              <div className="mt-[30px]">
                <span className="text-[30px] font-gilroy font-semibold">
                  {feature.title[0]}
                </span>
                <br />
                <span className="text-[30px] font-gilroy  font-semibold">
                  {feature.title[1]}
                </span>
              </div>
              <div className="mt-[20px]">
                <button className="text-[20px] border border-[rgba(255,255,255,0.3)] px-[20px] py-[10px] uppercase">
                  Know More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
