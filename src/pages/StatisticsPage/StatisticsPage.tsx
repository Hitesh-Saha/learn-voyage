import ActivitiesSection from "../../components/ActivitiesSection/ActivitiesSection";
import ComparisonSection from "../../components/ComparisonSection/ComparisonSection";
import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import GoalCard from "../../components/Utils/GoalCard";
// import Headers from "../../components/Utils/Headers";
const StatisticsPage = () => {
  return (
    <>
      <div className="flex flex-row w-11/12 gap-2">
        <div className="flex flex-col py-5 px-5 gap-4 w-1/2 h-full">
          {/* <Headers header="This week" /> */}
          <h1 className="text-2xl font-bold tracking-wide capitalize text-heading pt-5">
          This week
          </h1>
          <div></div>
          <div className="flex flex-row gap-4">
            <GoalCard
              icon="faBullseye"
              title="goal"
              target="2/3 days"
              bgColor="rgb(203, 225, 250)"
              color="rgb(46, 141, 255)"
            />
            <GoalCard
              icon="faStar"
              title="streak"
              target="103 days"
              bgColor="rgb(227, 240, 211)"
              color="rgb(159, 203, 102)"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-wide capitalize text-heading pt-5">
            My Performance
          </h1>
          <div className="flex flex-row gap-4">
            <StatisticsCard
              title="Time spent"
              count="31.8 hours"
              icon="faBookOpen"
              color="rgb(203, 225, 250)"
              iconColor="rgb(46, 141, 255)"
            />
            <StatisticsCard
              title="Average/day"
              count="4.6 hours"
              icon="faHourglassEnd"
              color="rgb(252, 231, 205)"
              iconColor="rgb(254, 158, 35)"
            />
            <StatisticsCard
              title="Finished courses"
              count="12 courses"
              icon="faCheckDouble"
              color="rgb(227, 240, 211)"
              iconColor="rgb(159, 203, 102)"
            />
          </div>
        </div>
        <div className="flex flex-col py-5 px-5 gap-4 w-1/2 h-full">
          <h1 className="text-2xl font-bold tracking-wide capitalize text-heading pt-5">
            My Activity
          </h1>
          <ActivitiesSection />
          <h1 className="text-2xl font-bold tracking-wide capitalize text-heading pt-5">
            Last year comparison
          </h1>
          <ComparisonSection />
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
