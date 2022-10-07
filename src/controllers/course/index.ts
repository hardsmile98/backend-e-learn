import { Request, Response } from 'express';
import { CourseService } from '../../services/course';

class CourseController {
  private courseService: CourseService;

  constructor(){
    this.courseService = new CourseService();
  }
  
  // get list courses
  public getList = async(req: Request, res: Response) => {
    const { id: userId } = req;

    const courses = await this.courseService.getCourses();

    courses.forEach(({ id: courseId }) => {
      console.log(courseId);
    });

    const response = courses.map((course) => ({...course, progress: { value: 0, all: 60 }}));

    return res.json(response);
  };

  // add word in course
  public addWord = async(req: Request, res: Response) => {
    const { courseId, word, translate } = req.body;

    if(!courseId || !word || !translate) {
      return res.status(400).json({ message: 'Неверные данные' });
    }

    await this.courseService.addWord({ courseId, word, translate });
    
    return res.json({ success: true });
  };

  // add new course
  public addCourse = async(req: Request, res: Response) => {
    const { name } = req.body;
  
    if(!name) {
      return res.status(400).json({ message: 'Неверные данные' });
    }
  
    await this.courseService.addCourse({ name });
      
    return res.json({ success: true });
  };
}
export default CourseController;
