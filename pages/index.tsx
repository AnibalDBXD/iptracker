import Form from "../components/Form";
import IPContainer from "../components/IPContainer";
import IPDetails from "../components/IPDetails";
import Map from "../components/Map";
import Title from "../components/Title";

const IndexPage: React.FC = (): JSX.Element => (
  <div className="font-sans">
    <div className="text-center">
      <Title>IP Adress Tracker</Title>
      <Form placeholder="Search for any IP address or domain" />
    </div>
    <IPContainer>
      <IPDetails />
    </IPContainer>
    <div>
      <Map />
    </div>
  </div>
);

export default IndexPage;
