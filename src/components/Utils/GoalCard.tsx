import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoalCard = (props: any) => {
  return (
    <div
      className="flex flex-col justify-start items-center w-1/2 gap-4 bg-card-base h-40 rounded-3xl p-4"
      style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
    >
      <div className="flex justify-center gap-2 items-center">
        <FontAwesomeIcon
          icon={(Icons as any)[props.icon] as IconDefinition}
          className="text-heading"
        />
        <h1 className="text-md font-semibold tracking-tight uppercase text-center text-heading">
          {props.title}
        </h1>
      </div>

      <div
        className="flex justify-center items-center h-full w-full rounded-2xl"
        style={{ backgroundColor: props.bgColor }}
      >
        <h1
          className="text-3xl font-semibold tracking-wide lowercase text-center"
          style={{ color: props.color }}
        >
          {props.target}
        </h1>
      </div>
    </div>
  );
};

export default GoalCard;
