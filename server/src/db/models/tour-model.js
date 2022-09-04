import {model} from "mongoose";
import {TourSchema} from "../schemas/tour-schema";
const Tour = model("tourAttraction", TourSchema);

export class TourModel {
  // 관리자 페이지 spot 추가
  async add(tourInfo) {
    return await Tour.create(tourInfo);
  }
  // 카테고리별 spot 조회하기
  async findByCategory(categoryId) {
    return await Tour.find({category: categoryId});
  }
}

const tourModel = new TourModel();

export {tourModel};
