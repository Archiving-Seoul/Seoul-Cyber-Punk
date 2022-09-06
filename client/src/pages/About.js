import AboutMain from "../components/about/AboutMain";
import AboutIntroMap from "../components/about/aboutIntroMap/AboutIntroMap";
import AboutDescription from "../components/about/AboutDescription";
import OldNewMain from "../components/about/OldNewMain";
import DayNightMain from "../components/about/DayNightMain";
import GallerySlider from "../components/about/gallerySlider/GallerySlider";
import Favorite from "../components/about/favorite/Favorite";
import Footer from "../components/about/Footer";
import { useEffect, useState } from "react";
import * as Api from "../api.js";

function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [imgData, setImgData] = useState({});

  useEffect(() => {
    (async () => {
      const mood = await getAllInfo();
      await setImgData(mood);
    })();
  }, []);

  async function getAllInfo() {
    try {
      const res = await Api.get("/api/about/");
      const data = await res.data;
      const oldMood = data.filter((el) => el.mood === "OLD");
      const newMood = data.filter((el) => el.mood === "NEW");
      const dayMood = data.filter((el) => el.mood === "DAY");
      const nightMood = data.filter((el) => el.mood === "NIGHT");
      const combineMood_1 = oldMood.concat(newMood);
      const combineMood_2 = dayMood.concat(nightMood);
      const mood = {
        oldMood,
        newMood,
        dayMood,
        nightMood,
        combineMood_1,
        combineMood_2,
      };
      setIsLoading(false);
      return mood;
    } catch (error) {
      throw new Error("데이터를 받아올 수 없습니다.");
    }
  }
  return (
    <>
      <AboutMain />
      <AboutIntroMap />
      <AboutDescription />
      <OldNewMain />
      <GallerySlider
        isOld={true}
        isLoading={isLoading}
        combineMood={imgData.combineMood_1}
        firstImg={imgData.oldMood}
        secondImg={imgData.newMood}
      />
      <DayNightMain />
      <GallerySlider
        isOld={false}
        isLoading={isLoading}
        combineMood={imgData.combineMood_2}
        firstImg={imgData.dayMood}
        secondImg={imgData.nightMood}
      />
      <Favorite />
      <Footer />
    </>
  );
}

export default About;
