import { useParams } from "react-router-dom";
import DescribeCourse from "../../components/DescribeCourse/DescribeCourse";
import TopicsCard from "../../components/TopicsCard/TopicsCard";
import Headers from "../../components/Utils/Headers";
import { myCourses } from "../../temp/SampleData";

const CourseContentPage = () => {
  const { courseId } = useParams();
  const course = myCourses.find((course) => course.id.toString() === courseId);
  return (
    <>
      <div className="flex flex-row h-full w-full gap-2">
        <DescribeCourse course={course} backgroundColor=''/>
        <div className="flex flex-col py-5 px-10 gap-4 w-1/2 bg-card-base h-full relative">
          <Headers header="Course Overview" />
          <TopicsCard />
          <button className="flex justify-center items-center w-full justify-self-end bg-primary text-white rounded-xl uppercase text-sm font-semibold h-10 border-none"
            style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}>
            buy now</button>
        </div>
      </div>
    </>
  );
};

export default CourseContentPage;
