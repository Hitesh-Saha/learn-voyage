import { useParams } from "react-router-dom";
import DefaultState from "../../components/DefaultState/DefaultState";
import DescribeCourse from "../../components/DescribeCourse/DescribeCourse";
import LearningsCard from "../../components/LearningsCard/LearningsCard";
import Headers from "../../components/Utils/Headers"
import { Course } from "../../models/course";
import { sampleCourse } from "../../temp/SampleData";

const SavedPage = () => {
  const { courseId } = useParams();
  const savedCourses: Array<Course> = (sampleCourse as Array<Course>).filter((course: Course) => course.bookmarked === true);
  const course: Course | undefined = (sampleCourse as Array<Course>).find((course: Course) => course.id.toString() === courseId);
  return (
    <>
      <div className="flex flex-row h-full w-full gap-2">
        <div className="flex flex-col py-5 px-5 gap-4 w-1/2 h-full">
          <Headers header='Saved Courses' />
          <div className="grid grid-cols-1 justify-start items-start gap-3 pb-5 overflow-auto">
          {(savedCourses as Array<Course>).map((course: Course) => {
            return (
              <LearningsCard
                course={course}
                key={course.id}
                selected={courseId === course.id.toString()}
              />
            );
          })}
        </div>
        </div>
        {courseId && course ? <DescribeCourse course={course} backgroundColor='bg-card-base' />: <DefaultState />}
      </div>
    </>
  )
}

export default SavedPage