export const SkeletonLoader = () => {
  return (
    <div className="grid  justify-center gap-10">
      {[...Array(3)].map((e, i) => {
        return (
          <div
            className="grid lg:grid-cols-2 grid-cols-1 group   gap-7"
            key={i}
          >
            <div className="sm:w-[30rem] w-full lg:group-odd:order-2 lg:group-even:order-1 h-[14rem] rounded bg-slate-100 animate-pulse">
              &nbsp;
            </div>
            <div className="lg:group-odd:order-1 lg:group-even:order-2 ">
              <h2 className="sm:w-[20rem] w-full h-7 rounded bg-slate-100 animate-pulse"></h2>
              <div className="mt-7 sm:w-[30rem] w-[17rem] ">
                <p className="  h-6 rounded bg-slate-100 animate-pulse"></p>
                <p className=" h-6 mt-1 rounded bg-slate-100 animate-pulse"></p>
                <p className=" h-6 mt-1 rounded bg-slate-100 animate-pulse"></p>
              </div>
              &nbsp;
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const SkeltonSingleProject = () => {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="sm:w-[20rem] w-full h-[30rem] p-3 relative bg-slate-100/70 animate-pulse rounded-md"
        >
          <div className="w-full h-[25rem] rounded-md bg-slate-200 animate-pulse"></div>
          <div className="w-[3rem] rounded-full h-[3rem] bg-slate-200 animate-pulse mt-3"></div>
        </div>
      ))}
    </>
  );
};
