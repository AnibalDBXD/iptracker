import isIp from "is-ip";
import { Dispatch, FormEvent, SetStateAction, useRef } from "react";

import Arrow from "./icons/Arrow";

type Props = {
  placeholder: string;
  setIP: Dispatch<SetStateAction<string>>;
};

const Form: React.FC<Props> = ({ placeholder, setIP }): JSX.Element => {
  const form = useRef<any>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = form.current["input"].value;
    if (value) {
      if (isIp(value)) {
        setIP(value);
      } else {
        alert("Invalid IP address");
      }
    }
  };
  return (
    <form ref={form} onSubmit={handleSubmit} className="m-4 flex justify-center">
      <input
        className="rounded-l-lg p-4 border-t w-2/4 h-10 mr-0 border-b border-l focus:outline-none focus:ring focus:border-blue-300 text-gray-800 border-gray-200 bg-white"
        placeholder={placeholder}
        name="input"
      />
      <button className="px-8 rounded-r-lg bg-gray-600 text-white border-bg-gray-700 focus:outline-none focus:ring focus:border-blue-300">
        <Arrow />
      </button>
    </form>
  );
};

export default Form;
