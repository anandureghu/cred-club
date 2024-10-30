import images from "../../../../assets/images";

const SecureSection = () => {
  return (
    <div className="pt-[120px] h-screen">
      <img src={images.datasafe} alt="secure" className="w-[100px] mx-auto" />
      <h3 className="uppercase font-gilroy text-[24px] tracking-[8px] text-center mt-[50px] font-bold">
        your data isn't our business. keeping it safe is.
      </h3>
      <p className="text-center text-[70px] leading-[80px] mt-[70px] text-dark-300">
        all your personal data and <br />
        transactions are encrypted and <br />
        secured. there's no room for mistakes <br />
        because we didn't leave any.
      </p>
    </div>
  );
};

export default SecureSection;
