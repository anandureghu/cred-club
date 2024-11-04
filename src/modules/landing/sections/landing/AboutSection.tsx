import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutTextRef = useRef<HTMLDivElement | null>(null);

  const scrollText =
    "the story of CRED begins with trust. we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. this is the status quo we're building. make it to the club, and experience the ascension yourself.";

  useGSAP(() => {
    if (aboutTextRef && aboutTextRef.current) {
      gsap.fromTo(
        ".about-text",
        { color: "#333333" },
        {
          // backgroundPositionX: 0,
          ease: "none",
          color: "white",
          scrollTrigger: {
            trigger: ".about-text-container",
            markers: true,
            scrub: 1,
            start: "top center",
            end: "bottom center",
          },
          stagger: 0.5,
        }
      );
    }
  }, []);

  return (
    <>
      <div className="py-[179px] min-h-[100vh] w-fit pl-[10px] max-w-[50%] mx-auto">
        <h2 className="uppercase font-gilroy font-semibold text-[26px] tracking-[6px] text-dark">
          Not everyone makes it in.
        </h2>
        <div className="mt-[70px] about-text-container" ref={aboutTextRef}>
          {scrollText.split(" ").map((text) => {
            return (
              <span className="text-[67px] font-denton font-light tracking-[3px] about-text inline-block mr-4">
                {text}
              </span>
            );
          })}
        </div>
      </div>
      <hr className="w-[60%] border border-[rgba(255,255,255,0.13)] shadow-2xl shadow-white mx-auto rounded-lg" />
    </>
  );
};

export default AboutSection;
