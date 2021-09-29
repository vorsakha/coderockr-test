import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import handleBlockScroll from "../../utils/blockScroll";
import useClickOutside from "../../utils/hooks/useClickOutside";
import buttonIcon from "../../assets/buttonIcon.svg";
import { IoClose as CloseIcon } from "@react-icons/all-files/io5/IoClose";

const ContactDetail = () => {
  const [formContent, setFormContent] = useState<FormTypes>({
    name: "",
    email: "",
    phone: "",
    post: "",
  });

  const handleForm = (e: ChangeEvent) => {
    const value = (e.currentTarget as HTMLFormElement).value;
    const name = (e.currentTarget as HTMLFormElement).name;

    setFormContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formContent);
  };

  const location: any = useLocation();

  const history = useHistory();

  // Handle close modal
  const ref = useRef(null);
  const handleCloseButton = () => {
    handleBlockScroll(false);

    // If user came from within the website goBack
    // If user came from URL push page 1
    location.state ? history.goBack() : history.push(`/`);
  };

  useClickOutside(ref, handleCloseButton);

  useEffect(() => {
    handleBlockScroll(true);
  }, []);

  return (
    <div className="fixed left-0 top-0 flex items-center justify-center h-screen w-screen bg-opacity-40 bg-gray-900 blur-lg z-50">
      <div ref={ref} className="bg-white shadow p-16 min-w-lg relative">
        <button
          onClick={handleCloseButton}
          className="text-3xl absolute top-0 right-0 p-8"
        >
          <CloseIcon />
        </button>
        <h1 className="text-4xl text-yellow font-bold pb-8 text-center">
          Contact
        </h1>
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <label
            className="text-2xl mb-2"
            htmlFor="name"
            placeholder="Fill your full name"
          >
            Name
          </label>
          <input
            className="border border-gray-800 h-14 mb-8 p-4"
            value={formContent.name}
            onChange={handleForm}
            type="text"
            id="name"
            name="name"
          />

          <label
            className="text-2xl mb-2"
            htmlFor="email"
            placeholder="Fill a valid e-mail"
          >
            E-mail
          </label>
          <input
            className="border border-gray-800 h-14 mb-8 p-4"
            value={formContent.email}
            onChange={handleForm}
            type="email"
            id="email"
            name="email"
          />

          <label
            className="text-2xl mb-2"
            htmlFor="phone"
            placeholder="Fill a your phone"
          >
            Phone
          </label>
          <input
            className="border border-gray-800 h-14 mb-8 p-4"
            value={formContent.phone}
            onChange={handleForm}
            type="text"
            id="phone"
            name="phone"
          />

          <label className="text-2xl mb-2" htmlFor="post">
            Post
          </label>
          <textarea
            className="border border-gray-800 h-36 p-4"
            value={formContent.post}
            onChange={handleForm}
            id="post"
            name="post"
            placeholder="Hello..."
          />

          <div className="mt-8 mx-auto">
            <button
              className="flex shadow justify-center text-2xl items-center text-white bg-gray-800 py-3 w-56"
              type="submit"
            >
              <img className="mr-6" src={buttonIcon} alt="Submit" /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDetail;
