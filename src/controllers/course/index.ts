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

    const response = await Promise.all(courses.map( async (course) => {
      const { id: courseId } = course;

      const all = await this.courseService.countWordsInCourse(courseId);
      const value = await this.courseService.valueProgressInCourse({ courseId, userId });

      return {
        ...course,
        progress: {
          all,
          value,
        }
      };
    }));

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

  // get words for learn
  public getWords = async(req: Request, res: Response) => {
    const { id: userId } = req;
    const { courseId } = req.query;

    const learnedWords = await this.courseService.getLearnedWords({ courseId, userId });
    // исклюяаем выученные слова
    console.log(learnedWords);

    const words = await this.courseService.getWords({ courseId });

    const response = {
      moneyForWord: 2,
      words,
    };

    return res.json(response);
  };

  // finish learn words in course
  public finishLearn = async(req: Request, res: Response) => {
    const { id: userId } = req;
    const { courseId, money, wordIds } = req.body;
  
    if(!courseId || !money || !wordIds) {
      return res.status(400).json({ message: 'Неверные данные' });
    }
      
    return res.json({ success: true });
  };
}
export default CourseController;
