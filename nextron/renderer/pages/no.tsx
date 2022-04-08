import Nav from "@components/Nav";
import HeroSection from "@components/HeroSection";
import PreviewSection from "@components/PreviewSection";
import FeatureSection from "@components/FeatureSection";
import CallToAction from "@components/CallToAction";
import Footer from "@components/Footer";
import ExtraSection from "@components/ThirdSection";

// * Rough layout of Home page
export default () => {
  return (
    <>
      <HeroSection />
      <PreviewSection />
      <FeatureSection />
      <ExtraSection />
      <CallToAction />
    </>
  );
};
