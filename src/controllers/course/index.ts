import { Request, Response } from 'express';
import { CourseService } from '../../services/course';

class CourseController {
  private courseService: CourseService;

  constructor(){
    this.courseService = new CourseService();
  }
  
  // get list courses
  public getList = async(_: Request, res: Response) => {
    const courses = await this.courseService.getCourses();

    const response = courses.map((course) => ({...course, progress: { value: 0, all: 60 }}));

    return res.json(response);
  };
}
export default CourseController;
