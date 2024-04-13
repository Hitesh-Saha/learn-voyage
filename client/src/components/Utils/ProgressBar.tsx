const ProgressBar = (props: any) => {
  return (
    <div className="h-2 w-full bg-base rounded-full">
      <div
        className={`h-2 rounded-full ${
          !props.progressColor ? "bg-primary" : ""
        }`}
        style={{
          width: `${props.progress}%`,
          backgroundColor: props.progressColor,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
