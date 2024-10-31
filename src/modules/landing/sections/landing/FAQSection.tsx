import { useState } from "react";
import icons from "../../../../assets/icons";

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const faqs = [
    {
      title: "about CRED",
      description:
        "CRED is a members-only club that rewards trustworthy individuals with financial and lifestyle progress. members are rewarded with exclusive perks and privileges for making sound financial decisions. trusted by over 25 million creditworthy members, CRED transforms each payment into a rewarding experience.",
    },
    {
      title: "getting a membership",
      description:
        "to become a CRED member, you need a credit score of 750 or above. you can apply for membership by signing up on CRED with your name and a valid mobile number (issued within India). if your credit score makes the cut, we'll see you there.",
    },
    {
      title: "the CRED member experience",
      description:
        "CRED's suite of products is designed to help the creditworthy fast-track their financial & lifestyle progress. we partner with premier brands to offer unparalleled experiences and rewards to our members. members also earn cashback and coins on their payments, along with opportunities to elevate their lifestyle.",
    },
    {
      title: "checking your credit score ",
      description:
        "members can check and refresh their credit score on the CRED app. CRED acquires the updated credit score through a CIBIL score soft inquiry. you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status.",
    },
    {
      title: "banks supported on CRED",
      description:
        "CRED supports credit card bill payments for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards.",
    },
  ];
  return (
    <div className="w-screen py-[50px] border-t border-b border-solid border-[#8f8f8f9f]">
      <div
        className="flex justify-center items-center font-gilroy text-[30px] tracking-[8.4px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>FAQ's</span>
        <img
          src={icons.arrowDown}
          alt="arrow-down"
          className={`w-[30px] ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div
        className={`${
          isOpen ? "h-full mt-[200px]" : "h-0 mt-0"
        } overflow-y-hidden px-[10%]`}
      >
        {faqs.map((faq) => {
          return (
            <div>
              <h3 className="text-[30px] font-gilroy font-bold mb-[70px]">
                {faq.title}
              </h3>
              <p className="mb-[70px] text-[22px] font-gilroy leading-[40px]">
                {faq.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
