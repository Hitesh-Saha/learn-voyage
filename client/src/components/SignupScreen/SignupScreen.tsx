import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SignupScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    useState<boolean>(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string>("");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const signUp = () => {
    console.log(username, fullname, password, confirmPassword);
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
          "Passwords must be at least 8 characters long and contain at least one number and one uppercase letter"
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

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== "") {
      if (
        !/[A-Z]/.test(e.target.value) ||
        !/[0-9]/.test(e.target.value) ||
        e.target.value.length < 8
      ) {
        setIsConfirmPasswordError(true);
        setConfirmPasswordErrorMessage(
          "Passwords must be at least 8 characters long and contain at least one number and one uppercase letter"
        );
      } else {
        if (password != e.target.value) {
          setIsConfirmPasswordError(true);
          setConfirmPasswordErrorMessage("Passwords do not match");
        } else {
          setIsConfirmPasswordError(false);
          setConfirmPasswordErrorMessage("");
        }
      }
    } else {
      setIsConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }
    // if (confirmPassword !== e.target.value) {
    //   setConfirmPassword('');
    // }
  };

  useEffect(() => {
    if (
      username !== "" &&
      fullname !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      !isPasswordError &&
      !isConfirmPasswordError
    ) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [
    username,
    fullname,
    password,
    confirmPassword,
    isPasswordError,
    isConfirmPasswordError,
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold text-heading uppercase text-center pb-4">
        Sign Up
      </h1>
      <input
        type="text"
        className="w-full h-12 rounded-xl p-4 text-heading hover:border border-primary"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        className="w-full h-12 rounded-xl p-4 text-heading hover:border border-primary"
        placeholder="Enter name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      ></input>
      <input
        type="text"
        className="w-full h-12 rounded-xl p-4 text-heading hover:border border-primary"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <div className="relative h-12 w-full">
        <input
          type={showConfirmPassword ? "text" : "password"}
          className="w-full h-12 rounded-xl p-4 pr-12 text-heading hover:border border-primary"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => handleConfirmPassword(e)}
        />
        <FontAwesomeIcon
          icon={showConfirmPassword ? faEye : faEyeSlash}
          className="absolute h-6 w-6 right-3 top-3 cursor-pointer"
          onClick={toggleConfirmPassword}
        />
      </div>
      {isConfirmPasswordError && (
        <p className="text-xs text-red-500 font-semibold pl-4">
          {confirmPasswordErrorMessage}
        </p>
      )}

      <button
        className={`w-44 h-10 mx-auto bg-primary text-white rounded-xl uppercase text-sm font-semibold shadow-inherit justify-center active:scale-95 hover:scale-105 mt-4 ${
          !isEnabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px" }}
        onClick={signUp}
      >
        sign up
      </button>

      <p className="text-center text-sm font-semibold text-heading text-wrap">
        Already have an account?
        <a
          href="/login"
          className="text-primary pl-1"
        >
          Login
        </a>
      </p>
    </>
  );
};

export default SignupScreen;
