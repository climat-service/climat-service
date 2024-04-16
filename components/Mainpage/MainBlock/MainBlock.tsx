import Image from "next/image";

// /images/BIaacegiklmmno.png;
const MainBlock = () => {
  const greenText = `text-[#40A74B]`;

  return (
    <section>
      <h1 className="w-[85%] mx-auto text-3xl font-extrabold xl:text-9xl xl:w-[92%]">
        КЛИМАТ СЕРВИС: климатические системы, кондиционеры, вентиляция
        {/* Кондиционер <span className={greenText}>такой-то 400х</span> очень
        классный все дела и <span className={greenText}>что-то еще</span> */}
      </h1>
      <div className="flex items-start justify-center gap-1 overflow-x-hidden xl:justify">
        <ul className="px-3 bg-[#F4F4F4] rounded-3xl mt-3 xl:flex xl:px-0 xl:self-end">
          <li className="text-[#0C60A4] flex flex-col gap-[2px] text-center font-semibold border-b border-[#C9C9C9] py-3 xl:py-14 xl:border-b-0 xl:border-r xl:px-[30px] xl:text-[40px]">
            2.5GHz
            <span className="text-[#2F2F2F] text-xs font-normal xl:text-base">
              показатель чего-то
            </span>
          </li>
          <li className="text-[#0C60A4] flex flex-col gap-[2px] text-center font-semibold border-b border-[#C9C9C9] py-3 xl:py-14 xl:border-b-0 xl:border-r xl:px-[30px] xl:text-[40px]">
            2.5GHz
            <span className="text-[#2F2F2F] text-xs font-normal xl:text-base">
              показатель чего-то
            </span>
          </li>
          <li className="text-[#0C60A4] flex flex-col gap-[2px] text-center font-semibold border-b border-[#C9C9C9] py-3 xl:py-14 last-of-type:border-0 xl:border-b-0 xl:border-r xl:px-[30px] xl:text-[40px]">
            4.4GHz
            <span className="text-[#2F2F2F] text-xs font-normal xl:text-base">
              показатель чего-то
            </span>
          </li>
        </ul>
        <Image
          src={"/images/mainBlockImage.png"}
          alt="кондиционер"
          width={1001}
          height={534}
          className="h-[248px] lg:h-[532px] mr-[-200px] mt-[-10px] xl:mr-[-500px]"
        />
      </div>
    </section>
  );
};

export default MainBlock;
