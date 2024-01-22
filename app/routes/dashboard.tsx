import { HamburgerIcon, SearchIcon } from "~/components/Icons";
import img from "../assets/images/Group 84 1.png";
export default function DashBoard() {
  return (
    <>
      <header className="flex justify-between px-6 py-4">
        <button>
          <HamburgerIcon />
        </button>
        <h1 className="text-[14px] font-semibold font-nunito">All Notes</h1>
        <button>
          <SearchIcon />
        </button>
      </header>
      <section>
        <div>
          <img src={img} />
        </div>
        <div className="flex flex-col items-center gap-3 px-[31px]">
          <h3 className="text-[24px] font-nunito font-bold text-center">
            Create Your First Note
          </h3>
          <p className="text-[16px] font-nunito text-center text-[#595550] font-bold">
            Add a note about anything (your thoughts on climate change, or your
            history essay) and share it witht the world.
          </p>
          <button className="bg-[#D9614C] text-[20px] text-[#fff] py-6 mt-[70px] font-bold font-nunito leading-[26px] rounded-xl text-center w-full">
            Create A Note
          </button>
        </div>
      </section>
    </>
  );
}
