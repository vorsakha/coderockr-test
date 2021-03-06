import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import handleBlockScroll from "../../utils/blockScroll";
import useClickOutside from "../../utils/hooks/useClickOutside";
import Close from "../common/Close";
import SubmitBtn from "./SubmitBtn";

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
    <div className="fixed left-0 top-0 flex items-center justify-center h-screen w-screen bg-opacity-60 bg-black blur-lg z-50">
      <div
        ref={ref}
        className="bg-white shadow-lg p-8 sm:p-16 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 m-4 sm:m-8 lg:min-w-lg relative"
      >
        <div className="absolute top-0 right-0">
          <Close onClick={handleCloseButton} />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl text-yellow font-bold pb-8 text-center">
          Contact
        </h1>
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <label
            className="text-lg sm:text-2xl mb-2"
            htmlFor="name"
            placeholder="Fill your full name"
          >
            Name
          </label>
          <input
            className="border border-gray-800 h-10 sm:h-14 sm:mb-6 mb-2 p-4"
            value={formContent.name}
            onChange={handleForm}
            type="text"
            id="name"
            name="name"
          />

          <label
            className="text-lg sm:text-2xl mb-2"
            htmlFor="email"
            placeholder="Fill a valid e-mail"
          >
            E-mail
          </label>
          <input
            className="border border-gray-800 h-10 sm:h-14 sm:mb-6 mb-2 p-4"
            value={formContent.email}
            onChange={handleForm}
            type="email"
            id="email"
            name="email"
          />

          <label
            className="text-lg sm:text-2xl mb-2"
            htmlFor="phone"
            placeholder="Fill a your phone"
          >
            Phone
          </label>
          <input
            className="border border-gray-800 h-10 sm:h-14 sm:mb-6 mb-2 p-4"
            value={formContent.phone}
            onChange={handleForm}
            type="text"
            id="phone"
            name="phone"
          />

          <label className="text-lg sm:text-2xl mb-2" htmlFor="post">
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

          <div className="mt-6 sm:mt-8 mx-auto">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDetail;
