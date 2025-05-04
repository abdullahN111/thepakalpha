import { HiArrowNarrowRight } from "react-icons/hi";

const PrimaryButton = ({ text, borderColor, textColor, arrowColor }) => {
  return (
    <button
      className={`group flex items-center justify-center gap-0 transition-all duration-500 mt-4 border ${borderColor} rounded-full px-2 py-[6px] hover:px-[18px] hover:bg-[#0a73cd] hover:border-transparent cursor-pointer mx-auto w-fit ease-in-out`}
    >
      <span
        className={`overflow-hidden max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out text-[15px] sm:text-base whitespace-nowrap ${textColor} group-hover:text-white poppins-light`}
      >
        {text}
      </span>
      <HiArrowNarrowRight
        className={`ml-2 text-[22px] sm:text-[26px] transition-colors duration-500 ${arrowColor} group-hover:text-white`}
      />
    </button>
  );
};

export default PrimaryButton;
