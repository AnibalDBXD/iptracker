type Props = {
  placeholder: string;
};

const Form: React.FC<Props> = ({ placeholder }): JSX.Element => {
  return (
    <form>
      <input
        className="my-8 p-2 rounded-l-lg w-2/4 h-10 focus:outline-none focus:ring focus:border-blue-300"
        placeholder={placeholder}
        type="text"
      />
      <button className="bg-black h-10 w-10 text-white">{">"}</button>
    </form>
  );
};

export default Form;
