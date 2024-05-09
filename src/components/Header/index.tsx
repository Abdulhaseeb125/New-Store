import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { BiSearch } from "react-icons/bi";
import { Label } from "@/components/ui/label";
import { FaStore } from "react-icons/fa";

const NavigationBar = (
  //   props: {
  //   sidebarOpen: string | boolean | undefined;
  //   setSidebarOpen: (arg0: boolean) => void;
  // }
) => {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-1 dark:bg-neutral-900 dark:drop-shadow-none shadow">
      <div className="flex flex-grow items-center justify-between px-4 py-4 gap-4 shadow-2 ">


        <div className="flex items-center gap-5 md:gap-10  ">
          <Link href="/" className="flex gap-1 items-center">
            {/* <FaStore color="#D83F31" size={20} /> */}
            <Label className="text-md font-light" >{"Women's Block"}</Label>
          </Link>
          {/* ============== */}
          <div className="">
            <form action="" method="POST">
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  <BiSearch size={24} />
                </button>
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 border-b"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-3   justify-end">
          <ul className="flex items-center gap-2 ">
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
