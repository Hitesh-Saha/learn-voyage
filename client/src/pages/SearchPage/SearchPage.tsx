import RecommendedCourseCard from "../../components/RecommendedCourseCard/RecommendedCourseCard";
import CategoriesCheckbox from "../../components/Utils/CategoriesCheckbox";
import Headers from "../../components/Utils/Headers";
import RatingsCheckbox from "../../components/Utils/RatingsCheckbox";
import SuggestPills from "../../components/Utils/SuggestPills";
import { Categories } from "../../models/common";
import { categories, myCourses } from "../../temp/SampleData";
const SearchPage = () => {
  return (
    <>
      <div className="flex flex-col py-5 px-5 gap-4 w-11/12 overflow-y-auto">
        <Headers header="Find your favourites" />
        <div className="w-1/2 flex flex-row gap-4 py-5">
          <input
            type="text"
            placeholder="Search for courses, categories, and more"
            className="w-full h-10 border border-primary-base bg-base rounded-xl px-5 text-sm"
          />
          <button
            className="mx-auto w-32 h-10 bg-primary text-white rounded-xl uppercase text-sm font-semibold"
            style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
          >
            Search
          </button>
        </div>
        <hr className="text-primary-base" />
        <h1 className=" text-md font-semibold tracking-tight uppercase text-heading">
          Top Searches
        </h1>
        <div className="flex flex-row items-center gap-2">
          <SuggestPills suggestName="Marketing Strategy" />
          <SuggestPills suggestName="UX Design" />
          <SuggestPills suggestName="Excel" />
          <SuggestPills suggestName="Adobe Photoshop" />
          <SuggestPills suggestName="CRM" />
          <SuggestPills suggestName="Photography" />
          <SuggestPills suggestName="Content Making" />
        </div>
        <hr className="text-primary-base" />
        <h1 className="text-md font-semibold tracking-tight uppercase text-heading">
          Categories
        </h1>
        <div className="flex flex-row items-center gap-8 pr-5">
          {(categories as Array<Categories>).map((category: Categories) => {
            return <CategoriesCheckbox category={category} key={category.id} />;
            })}
        </div>
        <hr className="text-primary-base" />
        <div className="flex flex-row gap-4 pb-2">
          <div className="flex flex-col w-1/3 justify-center gap-4">
            <h1 className="text-md font-semibold tracking-tight uppercase text-heading">
              Rating
            </h1>
            <RatingsCheckbox />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-md font-semibold tracking-tight uppercase text-heading">
              Level
            </h1>
            <div className="flex flex-row items-center gap-8 pr-5">
              {[{ id: 1, name: 'Beginner', icon: '' }, { id: 2, name: 'Intermediate', icon: '' }, { id: 3, name: 'Professional', icon: '' }].map((category: Categories) => {
                return <CategoriesCheckbox category={category} key={category.id} />
              })}
            </div>
          </div>
        </div>
        <hr className="text-primary-base" />
        <h1 className="text-md font-semibold tracking-tight uppercase text-heading">
          Recommended for you
        </h1>
        <div className="flex flex-row gap-4 pb-2">
          {myCourses.map((course) => {
            return <RecommendedCourseCard course={course} key={course.id} />
          })}

        </div>
      </div>
    </>
  );
};

export default SearchPage;
