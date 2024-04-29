import SignupScreen from "../../components/SignupScreen/SignupScreen"

const SignupPage = () => {
  return (
    <>
    <div
      className="p-10 flex"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className=" bg-base rounded-3xl w-full h-full flex flex-row"
        style={{ boxShadow: "rgba(17, 17, 17, 0.3) 0px 2px 24px" }}
      >
        <div className="w-1/2 flex flex-col gap-4 justify-center items-center mx-auto">
          <div className="flex flex-col gap-4 w-1/2">
            <SignupScreen />
          </div>
        </div>
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/a8ce660d-47da-404a-b3b3-63ca6970ddcf.png"
          alt="welcome screen"
          className="w-1/2 object-contain bg-card-base rounded-3xl bg-no-repeat"
        ></img>
      </div>
    </div>
  </>
  )
}

export default SignupPage