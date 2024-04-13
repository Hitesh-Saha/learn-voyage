import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "../Utils/ProgressBar";

const AchievementCard = (props: any) => {
  return (
    <>
      <div
        className="flex flex-row justify-start gap-2 w-full bg-card-base h-36 rounded-3xl p-2"
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
      >
        <div
          className="flex justify-center items-center h-full w-1/4 rounded-2xl"
          style={{ backgroundColor: props.color }}
        >
          <FontAwesomeIcon
            icon={(Icons as any)[props.icon] as IconDefinition}
            className="h-10 w-12"
            style={{ color: props.iconColor }}
          />
        </div>
        <div className="flex flex-col h-full gap-3 px-2 justify-center w-3/4 relative">
          <h1 className="text-xl font-bold capitalize pb-1">{props.title}</h1>
          <ProgressBar progress={props.progress} progressColor={props.iconColor} /> 
          <h2 className="text-sm capitalize text-heading font-semibold">
            {props.description}
          </h2>
          <h2 className="text-md capitalize text-heading font-semibold absolute right-5 top-5">
            {props.count}
          </h2>
        </div>
      </div>
    </>
  );
};

export default AchievementCard;
