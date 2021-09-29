import { AiOutlineLoading3Quarters as Icon } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";

const Loading = ({ bot }: { bot?: boolean }) => {
  return (
    <div
      className={`${
        bot ? `bottom-10 pb-8` : ``
      } flex py-2 px-8 mt-8 no-underline focus:outline-none`}
      role="alert"
    >
      <Icon className="text-gray-900 animate-spin text-3xl mx-auto" />
    </div>
  );
};

export default Loading;
