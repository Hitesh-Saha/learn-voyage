import { useState } from "react";

const SuggestPills = (props: any) => {
  const [selectedSuggest, setSelectedSuggest] = useState<boolean>(false);
  const handleSuggestClick = () => {
    setSelectedSuggest(!selectedSuggest);
  };

  return (
      <div
        className={`flex justify-center items-center gap-2 rounded-full h-10 w-fit px-5 border cursor-pointer ${
          selectedSuggest
            ? "border-primary bg-card-overlay"
            : "border-primary-base bg-card-base"
        }`}
        onClick={handleSuggestClick}
      >
        <h1
          className={`text-sm font-semibold tracking-wide uppercase ${
            selectedSuggest ? "text-primary" : "text-heading"
          }`}
        >
          {props.suggestName}
        </h1>
      </div>
  );
};

export default SuggestPills;
