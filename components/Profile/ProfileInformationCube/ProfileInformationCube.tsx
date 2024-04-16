"use client";
import EditIcon from "@/components/ui/icons/EditIcon";
import TrashIcon from "@/components/ui/icons/TrashIcon";

interface ProfileInformationCubeProps {
  title: string;
  description: string;
  setShown?: (value: boolean) => void;
  type?: string;
  isActive?: boolean;
  setActive?: () => void;
}

const ProfileInformationCube = ({
  title,
  description,
  setShown,
  type,
  isActive,
}: ProfileInformationCubeProps) => {
  if (type === "popup") {
    return (
      <article
        className={`border-2 ${
          isActive ? "border-[#40A74B]" : "border-[#EEE]"
        } rounded-xl max-w-[255px] lg:max-w-none lg:w-[486px] bg-white py-3 lg:py-6 px-6`}
      >
        <p className="flex items-center justify-between mb-6 text-sm lg:text-base font-semibold">
          {title}
        </p>
        <p className="text-xs lg:text-sm lg:max-w-[234px]">{description}</p>
      </article>
    );
  }

  return (
    <article className="border-2 min-h-[147px] min-w-[255px] lg:min-h-[244px] lg:min-w-0  border-[#EEE] rounded-xl max-w-[255px] lg:max-w-none lg:w-[486px] bg-white py-3 lg:py-6 px-6">
      <p className="flex items-center justify-between mb-6 text-sm lg:text-base font-semibold">
        {title}
        <EditIcon
          className="cursor-pointer"
          onClick={() => {
            if (setShown) setShown(true);
          }}
        />
      </p>
      <p className="text-xs lg:text-sm lg:max-w-[234px]">{description}</p>
    </article>
  );
};

export default ProfileInformationCube;
