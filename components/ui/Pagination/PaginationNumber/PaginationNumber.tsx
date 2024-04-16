interface IPaginationNumber {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const PaginationNumber = ({
  children,
  isActive,
  onClick,
}: IPaginationNumber) => {
  const activeStyles = `!text-[#40A74B] rounded-lg bg-[#EEE]`;

  return (
    <p
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center text-[#979797] cursor-pointer ${
        isActive ? activeStyles : ""
      } text-xs lg:text-sm font-medium`}
    >
      {children}
    </p>
  );
};

export default PaginationNumber;
