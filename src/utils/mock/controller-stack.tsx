export const ControllerStack = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-3 w-[432px] border border-solid border-background-300 p-4 m-auto">
      {children}
    </div>
  );
};
