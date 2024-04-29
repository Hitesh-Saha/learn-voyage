import { useNavigate } from "react-router-dom";
import { Course } from "../../models/course";
import Author from "../Utils/Author";
import Duration from "../Utils/Duration";
import Rating from "../Utils/Rating";

const DescribeCourse = (props: {course: Course, backgroundColor?: string}) => {
  const navigate = useNavigate();
  const navigateToCourse = () => {
    navigate(`/course/${props.course.id}`);
  };
  return (
    <>
      <div className={`flex flex-col py-5 px-5 w-1/2 h-full gap-4 overflow-y-auto ${props.backgroundColor}`}>
        <img
          src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080"
          alt=""
          className="rounded-2xl w-full h-2/5"
        ></img>
        <div className="flex flex-col gap-4 justify-around w-full">
          <div className="flex flex-col justify-start gap-4 pl-2">
            <h1 className="text-xl font-bold pt-2">{props.course.title}</h1>
            <Author author={props.course.author} />
            <Duration duration={props.course.duration} />
            <Rating rating={props.course.rating} />
            <h2 className="text-lg font-bold pt-2">Course Description</h2>
            <p className="text-sm pr-2">
              {props.course.description}
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <button className="flex justify-center items-center w-1/2 border border-primary text-primary rounded-xl uppercase text-sm font-semibold h-10">
              Review Course
            </button>
            <button
              className="flex justify-center items-center w-1/2 bg-primary text-white rounded-xl uppercase text-sm font-semibold h-10 border-none"
              style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
              onClick={navigateToCourse}
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescribeCourse;
