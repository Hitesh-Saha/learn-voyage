import LearningsCard from "../../components/LearningsCard/LearningsCard";
import { sampleCourse } from "../../temp/SampleData";
import Headers from "../../components/Utils/Headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import DescribeCourse from "../../components/DescribeCourse/DescribeCourse";
import { useNavigate, useParams } from "react-router-dom";
import DefaultState from "../../components/DefaultState/DefaultState";
import { Course } from "../../models/course";

const CoursesPage = () => {
  const { courseId } = useParams();
  const courseInProgress: Array<Course> = (sampleCourse as Array<Course>).filter((course: Course) => course.enrolled === true);
  const selectedCourse: Course | undefined = (sampleCourse as Array<Course>).find((course: Course) => course.id.toString() === courseId);
  const navigate = useNavigate();
  const navigateToStatistics = () => {
    navigate("/statistics");
  }
  return (
    <>
      <div className="flex flex-row h-full w-full gap-2">
        <div className="flex flex-col py-5 px-5 gap-4 w-1/2 h-full">
          <div className="flex flex-row justify-between items-center">
            <Headers header="My Learning" />
            <div className="flex flex-row gap-2 cursor-pointer" onClick={navigateToStatistics}>
              <FontAwesomeIcon
                icon={faChartColumn}
                className="text-primary-base"
              />
              <h2 className="text-sm text-center text-nowrap text-heading font-semibold">
                Statistics
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-start items-start gap-3 pb-5 overflow-auto">
            {(courseInProgress as Array<Course>).map((course: Course) => {
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
        {courseId && selectedCourse ? <DescribeCourse course={selectedCourse} backgroundColor='bg-card-base' />: <DefaultState />}
      </div>
    </>
  );
};

export default CoursesPage;
