import { ChangeEvent, FormEvent, useState } from "react";

const useForm = () => {
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

  return { handleForm, handleSubmit, formContent };
};

export default useForm;
