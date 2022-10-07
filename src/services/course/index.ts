import { Course } from "../../enities/course";
import { Word } from "../../enities/course/word";
import { Progress } from "../../enities/course/progress";
export class CourseService {
  public getCourses = async() => {
    return await Course.find(); 
  };

  public addWord = async(word) => {
    const newWord = new Word();

    newWord.courseId = word.courseId;
    newWord.translate = word.translate;
    newWord.word = word.word;

    return await Word.save(newWord); 
  };

  public countWordsInCourse = async(courseId) => {
    return await Word.countBy({ courseId }); 
  };

  public valueProgressInCourse = async({ courseId, userId }) => {
    return await Progress.countBy({ courseId, userId }); 
  };

  public addCourse = async(course) => {
    const newCourse = new Course();
    
    newCourse.name = course.name;

    return await Course.save(newCourse); 
  };
}