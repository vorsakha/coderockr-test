import { AiOutlineLoading3Quarters as Icon } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";

const Loading = ({ bot, className }: { bot?: boolean; className?: string }) => {
  return (
    <div
      className={`${
        bot ? `bottom-10 pb-8` : ``
      } flex py-2 px-8 mt-8 no-underline focus:outline-none ${className}`}
      role="alert"
    >
      <Icon className="text-yellow-500 animate-spin text-3xl mx-auto" />
    </div>
  );
};

export default Loading;
