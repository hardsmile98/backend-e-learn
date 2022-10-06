import { Course } from "../../enities/course";

export class CourseService {
  public getCourses = async() => {
    return await Course.find(); 
  };
}