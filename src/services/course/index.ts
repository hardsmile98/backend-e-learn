import { Visit } from "../../enities/profile/visit";

export class CourseService {
  public getVisit = async(visitId) => {
    return await Visit.findOneBy({visitId});
  };
}