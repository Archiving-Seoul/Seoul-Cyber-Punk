import AboutMain from "../components/about/AboutMain";
import AboutIntroMap from "../components/about/aboutIntroMap/AboutIntroMap";
import AboutDescription from "../components/about/AboutDescription";
import GallerySlider from "../components/about/gallerySlider/GallerySlider";
import { useEffect, useState } from "react";
import * as Api from "../api.js";

function About() {
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
      const mood = { oldMood, newMood, dayMood, nightMood };
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
      <GallerySlider imgData={imgData} />
    </>
  );
}

export default About;
