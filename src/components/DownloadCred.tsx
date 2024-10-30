import images from "../assets/images";

const DownloadCred = () => {
  return (
    <div className="flex items-center gap-[20px] border border-solid px-[25px] py-[15px] border-dark-300 w-fit">
      <img src={images.qrFinal} alt="download-cred" className="w-[80px]" />
      <div className="font-gilroy text-center text-[24px]">
        Download <br />
        <span className="">CRED</span>
      </div>
    </div>
  );
};

export default DownloadCred;
