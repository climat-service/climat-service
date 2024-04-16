import Link from "next/link";

interface HeaderNavList {
  navList: {
    text: string;
    link: string;
  }[];
}

const HeaderNavList = ({ navList }: HeaderNavList) => {
  return (
    <nav className="hidden lg:flex bg-[#F4F4F4] items-center justify-center py-4 px-12 rounded-2xl">
      <ul>
        {navList.map((item) => {
          return (
            <li key={item.text} className="inline-block ml-6">
              <Link
                href={item.link}
                className="text-[#2F2F2F] text-[18px] font-medium hover:opacity-50 transition-all"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavList;
