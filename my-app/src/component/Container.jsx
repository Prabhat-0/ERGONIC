const Container = ({ children, style = "" }) => {
  return (
    <div
      className={`mx-auto flex h-auto w-full min-w-0 flex-col items-center justify-center gap-2.5 xl:max-w-282 ${style}`}
    >
      {children}
    </div>
  );
};

export default Container;