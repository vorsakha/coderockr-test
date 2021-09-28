import { ChangeEvent, FormEvent, useState } from "react";

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

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" placeholder="Fill your full name">
          Name
        </label>
        <input
          value={formContent.name}
          onChange={handleForm}
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email" placeholder="Fill a valid e-mail">
          E-mail
        </label>
        <input
          value={formContent.email}
          onChange={handleForm}
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="phone" placeholder="Fill a your phone">
          Phone
        </label>
        <input
          value={formContent.phone}
          onChange={handleForm}
          type="text"
          id="phone"
          name="phone"
        />

        <label htmlFor="post">Post</label>
        <textarea
          value={formContent.post}
          onChange={handleForm}
          id="post"
          name="post"
          placeholder="Hello..."
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactDetail;
