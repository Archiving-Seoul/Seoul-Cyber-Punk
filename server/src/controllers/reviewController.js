import axios from "axios";
import { blogModel, youtubeModel } from "../db";

const reviewController = {
  //유튜브 데이터 DB에 저장하는 용도(배포때 사용X)
  addDB: async (req, res) => {
    let URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}`;
    const optionParams = {
      q: "seoultravelog",
      part: "snippet",
      maxResults: 2,
    };
    for (let option in optionParams) {
      URL += "&" + option + "=" + optionParams[option];
    }

    try {
      const result = await axios.get(URL);
      const yotubeArr = await result.data.items;
      const reviewData = yotubeArr.map((el) => {
        return {
          tab: "youtube",
          imgURL: el.snippet.thumbnails.high.url,
          title: el.snippet.title,
          linkURL: el.id.videoId,
        };
      });
      await youtubeModel.addYoutube(yotubeArr);
      res.status(200).json(reviewData);
    } catch (error) {
      console.error(error);
    }
  },
  getYoutube: async (req, res) => {
    try {
      const result = await youtubeModel.findAllYoutube();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  addBlog: async (req, res) => {
    try {
      const blogs = req.body;
      const result = await blogModel.addBlogToDB(blogs);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  getBlog: async (req, res) => {
    try {
      const result = await blogModel.findAllBlogs();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
};

export { reviewController };
