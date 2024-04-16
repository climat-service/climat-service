import IUi from "@/interfaces/IUi";

const ContentZone = ({ children, className }: IUi) => {
  return (
    <div className={"w-[80%] mx-auto max-w-[1280px]" + ` ${className}`}>
      {children}
    </div>
  );
};

export default ContentZone;
