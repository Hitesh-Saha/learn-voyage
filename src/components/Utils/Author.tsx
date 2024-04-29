const Author = (props: any) => {
  return (
    <div
      className="p-1 rounded-2xl flex flex-row bg-card-base w-fit border-none justify-center items-center gap-2 pr-4"
      style={{ boxShadow: "rgba(17, 17, 17, 0.16) 0px 0px 16px" }}
    >
      <img
        src="https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        alt="Author avatar"
        className="h-6 w-6 rounded-full object-cover"
      />
      <h2 className="text-sm text-center pr-2 capitalize">{props.author}</h2>
    </div>
  );
};

export default Author;
