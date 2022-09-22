import axios from "axios";
import { youtubeModel } from "../db";

const youtubeController = {
  getInfo: async (req, res) => {
    let URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}`;
    const optionParams = {
      q: "seoultravel",
      part: "snippet",
      maxResults: 6,
    };
    for (let option in optionParams) {
      URL += "&" + option + "=" + optionParams[option];
    }
    // try {
    //   const searchedResult = await youtubeModel.findAllYoutube();
    //   if (searchedResult.length >= 7) {
    //     res.status(200).json(searchedResult);
    //     console.log("서치데터", searchedResult);
    //     return;
    //   } else {
    //     const result = await axios.get(URL);
    //     const yotubeArr = await result.data.items;
    //     const res = await youtubeModel.addYoutube(yotubeArr);
    //     res.status(200).json(res.data);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
    try {
      const result = await axios.get(URL);
      const yotubeArr = await result.data.items;
      const reviewData = yotubeArr.map((el) => {
        return {
          imgURL: el.snippet.thumbnails.high.url,
          title: el.snippet.title,
          videoId: el.id.videoId,
        };
      });
      // const res = await youtubeModel.addYoutube(yotubeArr);
      res.status(200).json(reviewData);
    } catch (error) {
      console.error(error);
    }
  },
};

export { youtubeController };
