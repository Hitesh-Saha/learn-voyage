import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);


  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      if (
        !/[A-Z]/.test(e.target.value) ||
        !/[0-9]/.test(e.target.value) ||
        e.target.value.length < 8
      ) {
        setIsPasswordError(true);
        setPasswordErrorMessage(
          "Password must be at least 8 characters long and contain at least one number and one uppercase letter"
        );
      } else {
        setIsPasswordError(false);
        setPasswordErrorMessage("");
      }
    } else {
      setIsPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  const logIn = () => {
    console.log(username, password);
  };

  useEffect(() => {
    if (username !== '' && password !== '' && !isPasswordError) {
      setIsEnabled(true);
    }
    else {
      setIsEnabled(false);
    }
  }, [username, password, isPasswordError])
  return (
    <>
      <h1 className="text-3xl font-bold text-heading uppercase text-center pb-4">
        Log in
      </h1>
      <input
        type="text"
        className="w-full h-12 rounded-xl p-4 text-heading hover:border border-primary"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <div className="relative h-12 w-full">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full h-12 rounded-xl p-4 pr-12 text-heading hover:border border-primary"
          placeholder="Enter password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="absolute h-6 w-6 right-3 top-3 cursor-pointer"
          onClick={togglePassword}
        />
      </div>
      {isPasswordError && (
        <p className="text-xs text-red-500 font-semibold pl-4">
          {passwordErrorMessage}
        </p>
      )}

      <button
        className={`w-44 h-10 mx-auto bg-primary text-white rounded-xl uppercase text-sm font-semibold shadow-inherit justify-center active:scale-95 hover:scale-105 mt-4 ${!isEnabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
        onClick={logIn}
      >
        log in
      </button>

      <p className="text-center text-sm font-semibold text-heading text-wrap">
        Create a new account?
        <a
          href="/signup"
          className="text-primary pl-1"
        >
          Sign Up
        </a>
      </p>
    </>
  );
};

export default LoginScreen;
