const RecommendedCourseCard = (props: any) => {
  return (
      <>
          <div className="flex flex-col w-40">
          <img
          src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080"
          alt=""
          className="rounded-2xl h-24 w-full object-cover"
              ></img>
              <h1 className="text-xl font-bold pt-2 text-wrap">{props.course.title}</h1>
              <h2 className="text-md pb-3 text-heading text-wrap">{props.course.author}</h2>
          </div>
      </>
  )
}

export default RecommendedCourseCard