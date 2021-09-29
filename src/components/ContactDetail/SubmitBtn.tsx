import buttonIcon from "../../assets/buttonIcon.svg";

const SubmitBtn = () => {
  return (
    <button
      className="flex shadow justify-center text-lg sm:text-2xl items-center text-white black py-2 sm:py-3 w-36 sm:w-56"
      type="submit"
    >
      <img className="mr-4 sm:mr-6" src={buttonIcon} alt="Submit" /> Submit
    </button>
  );
};

export default SubmitBtn;
