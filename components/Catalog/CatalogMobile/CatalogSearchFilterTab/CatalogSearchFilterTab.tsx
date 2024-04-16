"use client";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import Input from "@/components/ui/Input";
import FilterIcon from "@/components/ui/icons/FilterIcon";

interface ICatalogSearchFilterTab {
  setFilterShown: (value: boolean) => void;
  filterShown: boolean;
}

const CatalogSearchFilterTab = ({
  setFilterShown,
  filterShown,
}: ICatalogSearchFilterTab) => {
  return (
    <div className="bg-[#F4F4F4] py-6 flex items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-2 bg-[#FFF] w-[240px] rounded-xl">
        <SearchIcon className="w-4 h-4" />
        <Input
          type="text"
          placeholder="Поиск"
          className="border-0 max-w-[210px]"
        />
      </div>
      <FilterIcon
        onClick={() => {
          setFilterShown(!filterShown);
        }}
      />
    </div>
  );
};

export default CatalogSearchFilterTab;
