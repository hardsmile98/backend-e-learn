import { Course } from "../../enities/course";
import { Word } from "../../enities/course/word";
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

  public addCourse = async(course) => {
    const newCourse = new Course();
    
    newCourse.name = course.name;

    return await Course.save(newCourse); 
  };
}