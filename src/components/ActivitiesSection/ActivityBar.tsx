const ActivityBar = (props: any) => {
  return (
      <>
          <div className="flex flex-row h-12 w-full">
          <img
            src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080"
            alt=""
            className="h-full rounded-xl object-cover aspect-square"
          />
          <div className="flex flex-col px-2 justify-center items-start h-full">
            <h1 className="text-lg font-bold capitalize">
              {props.title}
            </h1>
            <h2 className="text-sm capitalize text-heading font-semibold">
              {props.author}
            </h2>
          </div>
        </div>
      </>
  )
}

export default ActivityBar