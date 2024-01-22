import { LogoIcon, BadgeIcon, CaretRightIcon } from "~/components/Icons";
import img from "~/assets/images/Mask Group 1.png";
const Navigation = () => {
  return (
    <aside className="pt-4">
      <div className="flex justify-center">
        <LogoIcon />
      </div>
      <div className="flex flex-col items-center">
        <img src={img} />
        <p className="mt-5 mb-2 text-[28px] font-nunito font-bold text-[#403B36]">
          Shambhavi Mishra
        </p>
        <p className="font-nunito text-[16px] text-[#595550] font-bold">
          Lucknow, India
        </p>
      </div>
      <div className="tabs flex flex-col px-8 gap-6">
        <button className="flex gap-3 items-center">
          <span>
            <BadgeIcon />
          </span>
          <span>Buy Premium</span>
          <span className="ml-auto">
            <CaretRightIcon />
          </span>
        </button>
        <button className="flex gap-3 items-center">
          <span>
            <BadgeIcon />
          </span>
          <span>Buy Premium</span>
          <span className="ml-auto">
            <CaretRightIcon />
          </span>
        </button>
        <button className="flex gap-3 items-center">
          <span>
            <BadgeIcon />
          </span>
          <span>Buy Premium</span>
          <span className="ml-auto">
            <CaretRightIcon />
          </span>
        </button>
        <button className="flex gap-3 items-center">
          <span>
            <BadgeIcon />
          </span>
          <span>Buy Premium</span>
          <span className="ml-auto">
            <CaretRightIcon />
          </span>
        </button>
        <button className="flex gap-3 items-center">
          <span>
            <BadgeIcon />
          </span>
          <span>Buy Premium</span>
          <span className="ml-auto">
            <CaretRightIcon />
          </span>
        </button>
        <button className="flex gap-3 items-center">
          <span>
            <BadgeIcon />
          </span>
          <span>Buy Premium</span>
          <span className="ml-auto">
            <CaretRightIcon />
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Navigation;
