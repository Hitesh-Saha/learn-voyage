const ComparisonBar = (props: any) => {
  return (
    <>
      <div className="flex flex-row p-2 gap-4 justify-start items-center">
        <h1 className="text-md font-semibold tracking-tight uppercase text-heading text-wrap w-1/4 text-left">
          {props.title}
        </h1>
        <div
          className="h-4 w-full bg-base rounded-full flex flex-row items-center justify-start"
        >
          <div
            className="h-4 rounded-l-full bg-primary"
            style={{
              width: `${props.progress}%`,
            }}
          ></div>
                  <div className="rounded-full border-primary border h-10 w-10 flex justify-center items-center text-primary text-xs font-semibold p-1" style={{ marginLeft: '-1px'}}>{`${props.progress}%`}</div>
        </div>
      </div>
    </>
  );
};

export default ComparisonBar;
