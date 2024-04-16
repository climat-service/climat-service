import Image from "next/image";

interface ProfileOrderBlockProps {
  image: string;
  name: string;
  date: string;
  price: number;
}

const ProfileOrderBlock = ({
  image,
  name,
  date,
  price,
}: ProfileOrderBlockProps) => {
  return (
    <article className="border border-[#EEE] rounded-xl w-[255px] bg-[#FFF] p-4 flex flex-col lg:flex-row lg:w-full lg:justify-between items-start justify-center gap-6 lg:items-center">
      <div className="flex items-center justify-center gap-4">
        <Image src={image} alt="кондиционер" width={48} height={48} />
        <p className="text-sm font-medium">{name}</p>
      </div>
      <div className="flex items-start justify-center flex-col gap-3 lg:flex-row">
{/*         <p className="flex items-center justify-center gap-1 text-sm text-[#979797]">
          <div className="w-[10px] h-[10px] bg-[#40A74B] rounded-full"></div>В
          пути
        </p> */}
        <p className="flex flex-col gap-[2px] text-xs lg:flex-row lg:items-center lg:justify-center lg:gap-1 lg:text-sm">
          Примерная дата доставки:
          <span className="text-sm text-[#979797]">{date}</span>
        </p>
      </div>
      <p className="text-sm font-semibold">{price} Р</p>
    </article>
  );
};

export default ProfileOrderBlock;
