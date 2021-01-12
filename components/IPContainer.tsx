type Props = {
  children: React.ReactChild[];
};

const IPContainer: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <ul className="w-9/12 bg-white shadow-lg rounded-lg flex flex-wrap overflow-hidden divide-x divide-gray-800 divide-opacity-25 -mt-8">
      {children.map((item, i) => (
        <li key={i} className="w-full overflow-hidden sm:w-full md:w-1/4 p-4">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default IPContainer;
