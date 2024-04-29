import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tab } from "../../models/common";
import "./NavBar.css";

const NavBar = () => {

  const [selectedTab, setSelectedTab] = useState<Tab>('home');
  const location = useLocation();
  
  useEffect(() => {
    setSelectedTab(location.pathname.split('/')[1] as Tab);
  }, [location.pathname])


  return (
    <>
      <div className="navbar w-1/12 flex flex-col justify-start items-center p-5 gap-9">
        <FontAwesomeIcon
          icon={Icons.faCode}
          style={{ height: "1rem", color: "white", background: "#2e8dffff" }}
          className="shadow-2xl p-3 rounded-3xl w-12"
        />
        <ul className="flex flex-col justify-start items-center gap-5 text-sm font-semibold">
          <Link
            to="/home"
            id="home"
            className="flex flex-col gap-1 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={Icons.faHouseChimney}
              style={{ height: "1.2rem" }}
              className={selectedTab === 'home' ? 'text-primary' : 'text-primary-base'}
            />
            <p className={selectedTab === 'home' ? 'text-primary' : 'text-primary-base'}>Home</p>
          </Link>
          <Link
            to="/search"
            id="search"
            className="flex flex-col gap-1 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={Icons.faMagnifyingGlass}
              style={{ height: "1.2rem" }}
              className={selectedTab === 'search' ? 'text-primary' : 'text-primary-base'}
            />
            <p className={selectedTab === 'search' ? 'text-primary' : 'text-primary-base'}>Search</p>
          </Link>
          <Link
            to="/mycourses"
            id="mycourses"
            className="flex flex-col gap-1 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={Icons.faCirclePlay}
              style={{ height: "1.2rem" }}
              className={selectedTab === 'mycourses' ? 'text-primary' : 'text-primary-base'}
            />
            <p className={selectedTab === 'mycourses' ? 'text-primary' : 'text-primary-base'}>Courses</p>
          </Link>
          <Link
            to="/saved"
            id="saved"
            className="flex flex-col gap-1 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={Icons.faBookmark}
              style={{ height: "1.2rem" }}
              className={selectedTab === 'saved' ? 'text-primary' : 'text-primary-base'}
            />
            <p className={selectedTab === 'saved' ? 'text-primary' : 'text-primary-base'}>Saved</p>
          </Link>
          <Link
            to="/profile"
            id="profile"
            className="flex flex-col gap-1 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={Icons.faCircleUser}
              style={{ height: "1.2rem" }}
              className={selectedTab === 'profile' ? 'text-primary' : 'text-primary-base'}
            />
            <p className={selectedTab === 'profile' ? 'text-primary' : 'text-primary-base'}>Profile</p>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
