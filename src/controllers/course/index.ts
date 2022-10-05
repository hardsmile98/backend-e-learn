import { Request, Response } from 'express';
import { CourseService } from '../../services/course';

class CourseController {
  private courseService: CourseService;

  constructor(){
    this.courseService = new CourseService();
  }
  
  // get list courses
  public getList = async(_: Request, res: Response) => {
    return res.json({ success: true });
  };
}
export default CourseController;
