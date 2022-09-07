import axios from "axios";

const youtubeController = {
  getInfo: async (req, res) => {
    let URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}`;
    const optionParams = {
      q: "seoultravel",
      part: "snippet",
      maxResults: 7,
    };
    for (let option in optionParams) {
      URL += "&" + option + "=" + optionParams[option];
    }
    try {
      const result = await axios.get(URL);
      res.status(200).json(result.data);
    } catch (err) {
      console.error(err);
    }
  },
};

export { youtubeController };
