import ComparisonBar from "./ComparisonBar"

const ComparisonSection = () => {
  return (
      <>
                <div
        className="flex flex-col justify-start w-full gap-4 bg-card-base rounded-3xl p-4"
        style={{ boxShadow: "rgba(17, 17, 17, 0.04) 0px 2px 24px" }}
      >
        <ComparisonBar
          title="study time"
          progress="12"
        />
          <hr className="text-primary-base" />
        <ComparisonBar
          title="hours learned"
          progress="7.2"
        />
        <hr className="text-primary-base" />
        <ComparisonBar
          title="finished courses"
          progress="25"
        />
      </div>
      </>
  )
}

export default ComparisonSection