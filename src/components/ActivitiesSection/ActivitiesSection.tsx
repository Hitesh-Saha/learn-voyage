import ActivityBar from "./ActivityBar";

const ActivitiesSection = () => {
  return (
    <>
      <div
        className="flex flex-col justify-start w-full gap-4 bg-card-base rounded-3xl py-4 px-8"
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
      >
        <h1 className="text-md font-semibold tracking-tight uppercase text-heading">
          Monday
        </h1>
        <ActivityBar
          title="Becoming a photographer"
          author="clara manning"
        />
        <ActivityBar
          title="Design thinking 2.0"
          author="chris kinley"
        />
        <hr className="text-primary-base" />
        <h1 className="text-md font-semibold tracking-tight uppercase text-heading">
          10 days ago
        </h1>
        <ActivityBar
          title="Becoming a photographer"
          author="clara manning"
        />
        <hr className="text-primary-base" />
        <button className="text-primary text-sm uppercase font-semibold tracking-tight text-left">
          View All Activity
        </button>
      </div>
    </>
  );
};

export default ActivitiesSection;
