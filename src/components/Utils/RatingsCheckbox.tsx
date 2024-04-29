import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const RatingsCheckbox = () => {
  const [rate, setRate] = useState<number>(0);
  const selectRating = (rating: number) => {
    setRate(rating);
  };
  return (
      <div className="flex flex-row gap-3 cursor-pointer">
        {/* {(Array as any).fill(5).map((index: number) => {
          <FontAwesomeIcon
            icon={faStar}
            className="text-primary-base"
            key={index}
          />;
        })} */}
        <FontAwesomeIcon
          icon={faStar}
          className={`${
            rate > 1 || rate === 1 ? "text-primary" : "text-primary-base"
          }`}
          onClick={() => {
            selectRating(1);
          }}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={`${
            rate > 2 || rate === 2 ? "text-primary" : "text-primary-base"
          }`}
          onClick={() => {
            selectRating(2);
          }}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={`${
            rate > 3 || rate === 3 ? "text-primary" : "text-primary-base"
          }`}
          onClick={() => {
            selectRating(3);
          }}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={`${
            rate > 4 || rate === 4 ? "text-primary" : "text-primary-base"
          }`}
          onClick={() => {
            selectRating(4);
          }}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={`${
            rate > 5 || rate === 5 ? "text-primary" : "text-primary-base"
          }`}
          onClick={() => {
            selectRating(5);
          }}
        />
      </div>
  );
};

export default RatingsCheckbox;
