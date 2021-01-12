type Props = {
  section: string;
  data: string | number;
};

const IPDetails: React.FC<Props> = ({ section, data }): JSX.Element => {
  return (
    <div>
      <small className="text-gray-500 font-light">{section}</small>
      <p className="text-xl text-center text-black font-semibold">{data}</p>
    </div>
  );
};

export default IPDetails;
