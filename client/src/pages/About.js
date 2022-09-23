import { useQuery } from "@tanstack/react-query";
import { getAllInfo } from "../react-query/queryFunction";

import AboutMain from "../components/about/AboutMain";
import AboutIntroMap from "../components/about/aboutIntroMap/AboutIntroMap";
import AboutDescription from "../components/about/AboutDescription";
import OldNewMain from "../components/about/OldNewMain";
import DayNightMain from "../components/about/DayNightMain";
import GallerySlider from "../components/about/gallerySlider/GallerySlider";
import Favorite from "../components/about/favorite/Favorite";
import Footer from "../components/about/Footer";

function About() {
  const { isLoading, isError, data, error } = useQuery(["about"], getAllInfo);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error: ${error.message}</h1>;
  }

  return (
    <>
      <AboutMain />
      <AboutIntroMap />
      <AboutDescription />
      <OldNewMain />
      <GallerySlider
        isOld={true}
        combineMood={data.combineMood_1}
        firstImg={data.oldMood}
        secondImg={data.newMood}
      />
      <DayNightMain />
      <GallerySlider
        isOld={false}
        combineMood={data.combineMood_2}
        firstImg={data.dayMood}
        secondImg={data.nightMood}
      />
      <Favorite />
      <Footer />
    </>
  );
}

export default About;
