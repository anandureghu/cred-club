import icons from "../../../../assets/icons";
import images from "../../../../assets/images";
import FooterItem from "../../components/landing/FooterItem";

const FooterSection = () => {
  const footerItems = [
    [
      {
        title: "upgrades",
        items: [
          { label: "CRED money", link: "#" },
          { label: "CRED mint", link: "#" },
          { label: "CRED garage", link: "#" },
          { label: "CRED escapes", link: "#" },
        ],
      },
      {
        title: "payments",
        items: [
          { label: "Scan & Pay", link: "#" },
          { label: "Tap to Pay", link: "#" },
          { label: "Pay to anyone", link: "#" },
          { label: "RuPay cards on UPI", link: "#" },
        ],
      },
    ],
    [
      {
        title: "company",
        items: [
          { label: "about CRED", link: "#" },
          { label: "careers", link: "#" },
        ],
      },
      {
        title: "insider perks",
        items: [{ label: "upgrade to UPI", link: "#" }],
      },
      {
        title: "design",
        items: [
          { label: "NeoPOP", link: "#" },
          { label: "manifesto", link: "#" },
        ],
      },
    ],
    [
      {
        title: "resources",
        items: [
          { label: "partner with us", link: "#" },
          { label: "calculations", link: "#" },
          { label: "articles", link: "#" },
          { label: "tech blog", link: "#" },
          { label: "credit source guide", link: "#" },
          { label: "credit card payment guide", link: "#" },
          { label: "customer care", link: "#" },
          { label: "Dreampurse (Hipbar) wallet", link: "#" },
          { label: "refund form", link: "#" },
        ],
      },
      {
        title: "policy",
        items: [
          { label: "transaction and user", link: "#" },
          { label: "verification", link: "#" },
          { label: "google api disclosure", link: "#" },
          { label: "UPI FAQ & grievances", link: "#" },
          { label: "returns and refunds", link: "#" },
          { label: "security", link: "#" },
          { label: "equal oppurtunity policy", link: "#" },
          { label: "investor relations", link: "#" },
          { label: "other disclosures", link: "#" },
        ],
      },
    ],
  ];
  return (
    <footer>
      <div className="flex justify-between mx-[5%] pt-[150px] pb-[50px] gap-[100px] border-b border-[#ffffff3a]">
        <div className="flex flex-col justify-between">
          <img src={icons.logo} alt="logo" className="w-[100px]" />
          <div>
            <img src={images.security} alt="security" className="h-[50px]" />
            <h3 className="font-bold font-gilroy text-[20px] tracking-[3px] opacity-80 mt-[20px]">
              complete security. no astericks.
            </h3>
            <p className="font-gilroy text-[18px] tracking-[1px] leading-[30px] w-[70%] opacity-40 mt-[60px]">
              CRED encrypts all data and transactions to ensure a completely
              secure experience for our members.
            </p>
          </div>
        </div>
        <div>
          <div className="border border-[#ffffff40] relative">
            <div className="absolute top-0 left-[30px] uppercase px-[20px] py-[10px] border border-[#ffffff40] font-gilroy tracking-[3px] -translate-y-1/2 bg-black text-[12px] text-white font-bold">
              Now Live
            </div>
            <img src={images.nowLiveWide} alt="now-live" />
          </div>
          <div className="flex justify-between">
            {footerItems.map((item) => {
              return (
                <div>
                  {item.map((footer) => {
                    return (
                      <FooterItem title={footer.title} items={footer.items} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-[5%] flex items-center justify-between mt-[60px] mb-[150px] text-[20px] opacity-30 font-gilroy">
        <p>
          copyright &copy; 2024{"-"}
          {new Date().getFullYear().toString().slice(2, 4)} Picominds
          Technologies Pvt Ltd.
        </p>
        <p>
          <a href="#">privacy policy</a>
          {" | "}
          <a href="#">terms and conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
