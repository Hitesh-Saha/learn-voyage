import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = (props: any) => {
  return (
    <div className="flex flex-row gap-2 justify-start items-center flex-nowrap">
      <FontAwesomeIcon
        icon={faStar}
        className="text-primary-base"
      />
      <p className="text-sm text-center pr-2 text-nowrap text-heading">{props.rating}</p>
    </div>
  );
};

export default Rating;
