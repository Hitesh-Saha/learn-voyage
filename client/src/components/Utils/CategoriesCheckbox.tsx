import { Categories } from "../../models/common";

const CategoriesCheckbox = (props: {category: Categories}) => {
    const selectCategory = (e: {target: {checked: boolean}}) => {
      console.log(e.target.checked)
    }
  return (
      <div
        className={`flex flex-row justify-center items-center gap-3 cursor-pointer`}
      >
        <input
          type="checkbox"
          className={`w-5 h-5 bg-base border-primary-base`}
          onClick={(e) => selectCategory(e as any)}
        />
        <h1
          className={`text-sm font-semibold tracking-wide uppercase text-heading`}
        >
          {props.category.name}
        </h1>
      </div>
  );
};

export default CategoriesCheckbox;
