import { IoClose as CloseIcon } from "@react-icons/all-files/io5/IoClose";

const Close = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="text-3xl p-2 md:p-8">
      <CloseIcon />
    </button>
  );
};

export default Close;
