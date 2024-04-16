import { PropagateLoader } from "react-spinners";

interface LoaderProps {
  color?: string;
  size?: number;
  className?: string;
}

const Loader = ({ color = "black", size = 15, className }: LoaderProps) => {
  const isBlackSpinnerColor = color === "black";
  return (
    <div
      className={`mx-auto ${className} min-h-screen min-w-full flex items-center justify-center`}
    >
      <PropagateLoader
        color={isBlackSpinnerColor ? "#000000" : "#ffffff"}
        size={size}
      />
    </div>
  );
};

export default Loader;
