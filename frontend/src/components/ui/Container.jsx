import clsx from "clsx";

function Container({ children, className, fluid = false }) {
  return (
    <div
      className={clsx(
        "w-full mx-auto",
        fluid
          ? "px-5 sm:px-6 md:px-8 lg:px-10"
          : "max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;