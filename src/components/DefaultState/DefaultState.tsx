import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultState = () => {
  return (
    <>
      <div className="flex flex-col py-5 px-5 gap-8 w-1/2 h-full bg-card-base justify-center items-center overflow-y-auto ">
        <div
          className="flex flex-col rounded-2xl justify-center items-center"
        >
          <FontAwesomeIcon icon={faBookBookmark} className="h-36 w-36 text-primary"/>
        </div>
        <h1 className="text-xl font-bold pt-2 capitalize text-primary">
            Select a course to preview
          </h1>
      </div>
    </>
  );
};

export default DefaultState;
