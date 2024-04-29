import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Categories } from "../../models/common";

const CategoriesCard = (props: {category: Categories}) => {
  const [selectedCategory, setSelectedCategory] = useState<boolean>(false);
  const handleCategory = () => {
    setSelectedCategory(!selectedCategory);
  };
  return (
    <>
      <div
        className={`${
          selectedCategory
            ? "bg-card-overlay border border-primary"
            : "bg-card-base  border-none"
        } w-36 h-20 flex flex-col p-2 rounded-2xl justify-center items-center gap-2 cursor-pointer`}
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
        onClick={handleCategory}
      >
        <FontAwesomeIcon
          icon={
            ((Icons as any)[props.category.icon] as IconDefinition) ||
            Icons.faLayerGroup
          }
          className={selectedCategory ? "text-primary" : "text-primary-base"}
        />
        <div>
          <h2
            className={`text-sm text-center font-semibold ${
              selectedCategory ? "text-primary" : "text-primary-base"
            }`}
          >
            {props.category.name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
