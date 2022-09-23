import * as Api from "../api.js";

export async function getAllInfo() {
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
  return mood;
}

export async function getYoutube() {
  const res = await Api.get("/api/youtube");
  const result = await res.data;
  console.log("요청");
  return result;
}
