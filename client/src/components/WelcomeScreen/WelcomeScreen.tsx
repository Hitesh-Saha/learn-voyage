import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import Logo from "../../assets/Logo.png";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  const getStarted = () => {
    navigate("/signup");
  };
  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/welcome");
    }
  }, []);
  return (
    <>
      <div className="flex flex-row items-end gap-3">
        {/* <FontAwesomeIcon
                  icon={faCode}
                  className="shadow-2xl p-1 rounded-2xl h-6 w-12 text-primary border border-primary"
                /> */}
        <img
          src={Logo}
          className="shadow-2xl p-1 h-8 w-8"
        ></img>
        <h1 className="font-semibold text-primary uppercase tracking-tight text-md">
          Learn Voyage
        </h1>
      </div>
      <h1 className="text-heading tracking-wide font-bold text-4xl pt-4 text-left">
        Discover passion
      </h1>
      <div>
        <p className="text-sm font-semibold text-heading text-wrap">
          Find out what topics you find interesting,
        </p>
        <p className="text-sm font-semibold text-heading text-wrap">
          learn a new skill & connect with people that are passionate about
          similar topics.
        </p>
      </div>
      <button
        className="w-44 h-10 bg-primary text-white rounded-xl uppercase text-sm font-semibold shadow-inherit active:scale-95 hover:scale-105"
        style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
        onClick={getStarted}
      >
        get started
      </button>
    </>
  );
};

export default WelcomeScreen;
