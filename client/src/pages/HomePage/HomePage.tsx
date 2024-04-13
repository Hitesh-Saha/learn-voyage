import { useNavigate } from "react-router-dom";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import CourseCard from "../../components/CourseCard/CourseCard";
import LearningsCard from "../../components/LearningsCard/LearningsCard";
import Headers from "../../components/Utils/Headers";
import { Categories } from "../../models/common";
import { Course } from "../../models/course";
import { sampleCourse, categories } from "../../temp/SampleData";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLearnings = () => {
    navigate("/mycourses");
  }
  const courseInProgress: Array<Course> = (sampleCourse as Array<Course>).filter((course: Course) => course.enrolled === true);

  return (
    <>
      <div className="flex flex-col py-5 px-5 gap-4 w-11/12 overflow-y-auto">
        <Headers header="Featured Courses" />
        <div className="grid grid-cols-5 justify-start items-start gap-3 pb-5 overflow-auto">
          {(sampleCourse as Array<Course>).map((course: Course) => {
            return (
              <CourseCard
                course={course}
                key={course.id}
              />
            );
          })}
        </div>
        <Headers header="Categories" />
        <div className="flex flex-row justify-start items-start gap-3 pb-5 overflow-auto">
          {(categories as Array<Categories>).map((category: Categories) => {
            return (
              <CategoriesCard
                category={category}
                key={category.id}
              />
            );
          })}
        </div>
        <Headers header="My Learning" />
        <div className="grid grid-cols-2 justify-start items-start gap-3 pb-5 overflow-auto">
          {(courseInProgress as Array<Course>).map((course: Course) => {
            return (
              <LearningsCard
                course={course}
                key={course.id}
              />
            );
          })}
        </div>
        <button
          className="mx-auto w-44 h-10 bg-primary text-white rounded-xl uppercase text-sm font-semibold active:scale-95"
          style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
          onClick={handleLearnings}
        >
          see all
        </button>
      </div>
    </>
  );
};

export default HomePage;
