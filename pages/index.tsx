import Form from "../components/Form";
import IPContainer from "../components/IPContainer";
import IPDetails from "../components/IPDetails";
import Map from "../components/Map";
import Title from "../components/Title";

const IndexPage: React.FC = (): JSX.Element => (
  <div className="font-sans">
    <div className="bg-hero text-center py-12 shadow">
      <Title>IP Adress Tracker</Title>
      <Form placeholder="Search for any IP address or domain" />
    </div>
    <div className="flex justify-center">
      <IPContainer>
        <IPDetails section="IP ADDRESS" data="192.292.323.2" />
        <IPDetails section="LOCATION" data="Brooklyn, NY 10001" />
        <IPDetails section="TIMEZONE" data="UTC-05:00" />
        <IPDetails section="ISP" data="SpaceX Starlink" />
      </IPContainer>
    </div>
    <div>
      <Map />
    </div>
  </div>
);

export default IndexPage;
