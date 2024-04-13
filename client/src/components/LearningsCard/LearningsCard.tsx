import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "../../models/course";
import Bookmark from "../Utils/Bookmark";
import ProgressBar from "../Utils/ProgressBar";

const LearningsCard = (props: {course: Course, selected?: boolean}) => {
  // const [selectedCourse, setSelectedCourse] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const selectCourse = () => {
    if (location.pathname.includes('/mycourses')) {
      navigate(`/mycourses/${props.course.id}`)
    } else {
      navigate(`/saved/${props.course.id}`)
    }
  }
  return (
    <>
      <div
        className={`h-36 flex flex-row p-2 relative rounded-3xl gap-2 cursor-pointer ${props.selected ? 'bg-card-overlay border border-primary' : 'bg-card-base border-none'}`}
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
        onClick={selectCourse}
      >
        <img
          src={props.course.banner}
          alt="Course Thumbnail"
          className="rounded-2xl h-full w-2/6 object-cover"
        ></img>
        <div className="flex flex-col gap-1 px-2 justify-start h-full w-4/6">
          <h1 className="text-xl font-bold pt-2 capitalize">{props.course.title}</h1>
          <h2 className="text-md pb-3 capitalize text-heading">{props.course.author}</h2>
          <ProgressBar progress={props.course.progress} />
          <p className="text-sm font-semibold text-heading">{`${props.course.progress}% complete`}</p>
        </div>
        <Bookmark bookmarked={props.course.bookmarked} />
      </div>
    </>
  );
};

export default LearningsCard;
