import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Duration = (props: any) => {
  const courseDuration = (duration: number) => {
    if (duration < 60) {
      return `${duration}m`;
    } else {
      return `${Math.floor(duration / 60)}h ${
        duration % 60 > 0 ? (duration % 60) + "m" : ""
      }`;
    }
  };

  return (
    <div className="flex flex-row gap-2 justify-start items-center flex-nowrap">
      <FontAwesomeIcon
        icon={faClock}
        className="text-primary-base"
      />
      <p className="text-sm text-center pr-2 text-nowrap text-heading">
        {courseDuration(props.duration)}
      </p>
    </div>
  );
};

export default Duration;
