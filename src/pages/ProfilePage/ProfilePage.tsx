import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headers from "../../components/Utils/Headers";
import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import AchievementCard from "../../components/AchievementCard/AchievementCard";

const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-row w-full gap-2 pb-5">
        <div className="flex flex-col py-5 px-5 gap-4 w-1/2 h-full">
          <div className="flex flex-row gap-4">
            <div className="w-1/4 flex justify-center items-end">
              <img
                src="https://assets.api.uizard.io/api/cdn/stream/ecfce0e0-bae1-4e4b-9187-d14a85958155.jpg"
                alt=""
                className="h-40 w-40 rounded-full object-cover"
                style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
              />
            </div>
            <div className="flex flex-col">
              <Headers header="John Sally" />
              <h1 className="text-md font-semibold tracking-tight uppercase text-heading py-2">
                <FontAwesomeIcon icon={faMapPin} />
                <span className="pl-2">New York</span>
              </h1>
              <div
                className="flex flex-row gap-4 border-8 border-white bg-base h-24 w-full rounded-3xl justify-between items-center px-5"
                style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
              >
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight uppercase text-heading">
                    0
                  </h1>
                  <h1 className="text-sm font-semibold tracking-tighter uppercase text-heading">
                    my courses
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight uppercase text-heading">
                    2
                  </h1>
                  <h1 className="text-sm font-semibold tracking-tighter uppercase text-heading">
                    followers
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight uppercase text-heading">
                    32
                  </h1>
                  <h1 className="text-sm font-semibold tracking-tighter uppercase text-heading">
                    following
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight capitalize text-heading pt-5">
            Total statistics
          </h1>
          <div className="flex flex-row gap-4">
            <StatisticsCard title='finished courses' count='3' icon='faCheck' color='rgb(203, 225, 250)' iconColor='rgb(46, 141, 255)' />
            <StatisticsCard title='hours learned' count='56' icon='faHourglassEnd' color='rgb(252, 231, 205)' iconColor='rgb(254, 158, 35)' />
            <StatisticsCard title='skills achieved' count='7' icon='faTrophy' color='rgb(227, 240, 211)' iconColor='rgb(159, 203, 102)' />
          </div>
          <h1 className="text-2xl font-bold tracking-tight capitalize text-heading pt-5">
            Achievements
          </h1>
          <AchievementCard title='Committed Learner' description='Reach a 3 day streak' icon='faHourglassEnd' color='rgb(252, 231, 205)' iconColor='rgb(254, 158, 35)' progress='23' count='2/3'/>
          <AchievementCard title='Point collector ' description='Earn 1800 more points' icon='faTrophy' color='rgb(227, 240, 211)' iconColor='rgb(159, 203, 102)' progress='40' count='1200/3000'/>
        </div>
        <div className="flex flex-col py-5 px-5 gap-4 w-1/2 h-full">
        <h1 className="text-2xl font-bold tracking-tight capitalize text-heading pt-5">
            Friend suggestions
          </h1>
          
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
