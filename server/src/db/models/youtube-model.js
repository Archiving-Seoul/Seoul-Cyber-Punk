import { model } from "mongoose";
import { YoutubeSchema } from "../schemas/youtube-schema";
const Youtube = model("youtubue", YoutubeSchema);

export class YoutubeModel {
  // 관리자 페이지 spot 추가
  async addYoutube(youtubeArr) {
    const reviewData = youtubeArr.map((el) => {
      return {
        imgURL: el.snippet.thumbnails.high.url,
        title: el.snippet.title,
        videoId: el.id.videoId,
      };
    });
    return await Youtube.create(reviewData);
  }
  async findAllYoutube() {
    return await Youtube.find();
  }
}

const youtubeModel = new YoutubeModel();

export { youtubeModel };
