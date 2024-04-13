import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Course } from "../../models/course";
import Author from "../Utils/Author";
import Bookmark from "../Utils/Bookmark";
import Duration from "../Utils/Duration";
import Rating from "../Utils/Rating";
import "./CourseCard.css";

const CourseCard = (props: { course: Course }) => {
  return (
    <>
      <div
        className="bg-card-base flex flex-col p-2 relative rounded-3xl border-none h-48"
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
      >
        <img
          src={props.course.banner}
          alt="Course Thumbnail"
          className="rounded-2xl border-none w-full h-1/2 bg-no-repeat object-cover"
          style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
        ></img>
        <Bookmark bookmarked={props.course.bookmarked} />
        <div className="pl-2 -mt-4">
          <Author author={props.course.author} />
        </div>
        <div className="flex flex-col gap-1 px-2 justify-center">
          <h1 className="card_title text-lg font-semibold pt-2 truncate">
            {props.course.title}
          </h1>
          <div className="card_body flex flex-row gap-2 justify-between items-center text-sm">
            <Duration duration={props.course.duration} />
            <Rating rating={props.course.rating} />
            <div className={`flex flex-row justify-center items-center gap-1 p-1 px-2 rounded-2xl text-sm font-semibold text-white justify-self-end ${props.course.courseType === 'free' ? 'bg-green-400' : 'bg-primary'}`}>
              {props.course.courseType != 'free' && <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="h-3 w-3"
              />}
              {`${props.course.courseType === 'free' ? 'Free' : props.course.price}`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
