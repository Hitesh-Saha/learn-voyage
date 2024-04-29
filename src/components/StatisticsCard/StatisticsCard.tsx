import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const StatisticsCard = (props: any) => {
  return (
    <>
      <div
        className="flex flex-col justify-start w-1/3 bg-card-base h-40 rounded-3xl p-2"
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
      >
        <div
          className="flex justify-center items-center h-full rounded-2xl"
          style={{ backgroundColor: props.color }}
        >
          <FontAwesomeIcon
            icon={(Icons as any)[props.icon] as IconDefinition}
            className="h-10 w-12"
            style={{ color: props.iconColor }}
          />
        </div>
        <h1 className="text-sm font-semibold tracking-tight uppercase text-center text-heading pt-3">
          {props.title}
        </h1>
        <h1 className="text-xl font-bold tracking-tight lowercase text-center text-heading pt-1">
          {props.count}
        </h1>
      </div>
    </>
  );
};

export default StatisticsCard;
