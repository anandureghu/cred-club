import AboutSection from "../sections/landing/AboutSection";
import CreditCardSection from "../sections/landing/CreditCardSection";
import DemoSection from "../sections/landing/DemoSection";
import FeaturesSection from "../sections/landing/FeaturesSection";
import HeaderSection from "../sections/landing/HeaderSection";
import RatingSection from "../sections/landing/RatingSection";
import RewardsSection from "../sections/landing/RewardsSection";
import SecureSection from "../sections/landing/SecureSection";

const LandingPage = () => {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <DemoSection />
      <CreditCardSection />
      <FeaturesSection />
      <RewardsSection />
      <SecureSection />
      <RatingSection />
    </>
  );
};

export default LandingPage;
