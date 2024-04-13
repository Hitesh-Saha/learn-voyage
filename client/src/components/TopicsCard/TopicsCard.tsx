import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ExpandedTopics from "./ExpandedTopics";

const TopicsCard = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={`flex flex-col p-4 relative rounded-2xl gap-2 cursor-pointer bg-card-base border-none `}
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
          >
              <div className="flex flex-row justify-between items-center px-2" onClick={() => setOpen(!open)}>
                  <div className="flex flex-col">
                      <h1 className="text-lg font-semibold tracking-wide">Introduction</h1>
                      {!open && <h1 className="text-sm font-semibold text-heading">1 video</h1>}
                  </div>
                  <FontAwesomeIcon icon={open ? faAngleDown : faAngleRight} className='text-heading'/>
              </div>
              {open && <ExpandedTopics/>}
      </div>
    </>
  );
};

export default TopicsCard;
