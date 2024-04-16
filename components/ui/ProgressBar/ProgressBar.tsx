interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar = ({ progress, className }: ProgressBarProps) => {
  return (
    <div className={"bg-[#EEE] rounded-[4px] h-1 " + className}>
      <div
        className="rounded-[4px] bg-[#40A74B] h-1"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
