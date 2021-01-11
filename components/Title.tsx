type Props = {
  children: React.ReactChild;
};

const Title: React.FC<Props> = ({ children }): JSX.Element => {
  return <h1 className="text-white text-3xl">{children}</h1>;
};

export default Title;
