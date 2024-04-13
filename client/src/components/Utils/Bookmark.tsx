import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Bookmark = (props: {bookmarked: boolean}) => {
  const [bookmark, setBookmark] = useState<boolean>(props.bookmarked || false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <div
      className="bg-transparent-base h-6 w-6 absolute top-4 right-4 rounded-lg flex justify-center items-center cursor-pointer"
      onClick={handleBookmark}
    >
      <FontAwesomeIcon
        icon={faBookmark}
        style={{ height: "0.8rem" }}
        className={bookmark ? "text-primary" : "text-white"}
      />
    </div>
  );
};

export default Bookmark;
