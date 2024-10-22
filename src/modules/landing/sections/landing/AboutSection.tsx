const AboutSection = () => {
  const scrollText = [
    "the story of CRED begins",
    "with trust. we believe",
    "individuals who've proven",
    "their trustworthiness",
    "deserve better: better",
    "experiences, better rewards,",
    "better rules. this is the status",
    "quo we're building. make it",
    "to the club, and experience",
    "the ascension yourself.",
  ];
  return (
    <>
      <div className="py-[179px] min-h-[100vh] mx-auto w-fit pl-[10px]">
        <h2 className="uppercase font-gilroy font-semibold text-[26px] tracking-[6px] text-dar">
          Not everyone makes it in.
        </h2>
        <div className="mt-[70px]">
          {scrollText.map((text) => {
            return (
              <p className="text-[67px] font-denton font-light tracking-[3px] text-dark-300">
                {text}
              </p>
            );
          })}
        </div>
      </div>
      <hr className="w-[60%] border border-[rgba(255,255,255,0.13)] shadow-2xl shadow-white mx-auto rounded-lg" />
    </>
  );
};

export default AboutSection;
