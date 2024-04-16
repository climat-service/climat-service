"use client";
import ContentZone from "@/components/ui/ContentZone";
import SmallArrowLeftIcon from "@/components/ui/icons/SmallArrowLeftIcon";
import PaginationNumber from "./PaginationNumber/PaginationNumber";
import { useState, useEffect } from "react";

interface IPaginationProps {
  items: any[];
  itemsPerPage: number;
  setCurrentItems: (value: any) => void;
}

const Pagination = ({
  items,
  itemsPerPage,
  setCurrentItems,
}: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    setCurrentItems(currentItems);
  }, [currentPage]);

  const handleClick = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {items && (
        <section className="py-5 bg-[#F4F4F4] xl:bg-white xl:my-8">
          <ContentZone className="flex items-center justify-center gap-6">
            <SmallArrowLeftIcon
              className="cursor-pointer"
              onClick={handlePrevClick}
            />
            <div className="flex items-center justify-center gap-[2px] lg:hidden">
              <PaginationNumber
                isActive={currentPage === currentPage}
                onClick={() => handleClick(currentPage)}
              >
                {currentPage}
              </PaginationNumber>
              <PaginationNumber>...</PaginationNumber>
              <PaginationNumber
                isActive={currentPage === totalPages}
                onClick={() => handleClick(totalPages)}
              >
                {totalPages}
              </PaginationNumber>
            </div>
            <div className="hidden lg:flex items-center justify-center gap-[2px]">
              <PaginationNumber
                isActive={currentPage === currentPage}
                onClick={() => handleClick(currentPage)}
              >
                {currentPage}
              </PaginationNumber>
              {currentPage + 2 < totalPages && (
                <>
                  <PaginationNumber
                    isActive={currentPage === currentPage + 1}
                    onClick={() => handleClick(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </PaginationNumber>
                  <PaginationNumber
                    isActive={currentPage === currentPage + 2}
                    onClick={() => handleClick(currentPage + 2)}
                  >
                    {currentPage + 2}
                  </PaginationNumber>
                </>
              )}
              <PaginationNumber>...</PaginationNumber>
              <PaginationNumber
                isActive={currentPage === totalPages}
                onClick={() => handleClick(totalPages)}
              >
                {totalPages}
              </PaginationNumber>
            </div>
            <SmallArrowLeftIcon
              className="rotate-180 cursor-pointer"
              onClick={handleNextClick}
            />
          </ContentZone>
        </section>
      )}
    </>
  );
};

export default Pagination;
