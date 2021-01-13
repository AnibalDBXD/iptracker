import Form from "../components/Form";
import IPContainer from "../components/IPContainer";
import IPDetails from "../components/IPDetails";
import MapContainer from "../components/MapContainer";
import Title from "../components/Title";

const ipStyles = {
  transform: "translate(-50%, 0)",
};

const mapStyles = {
  height: "77%",
};

const IndexPage: React.FC = (): JSX.Element => {
  return (
    <div className="font-sans h-screen w-screen">
      <div className="bg-hero text-center py-12 shadow">
        <Title>IP Adress Tracker</Title>
        <Form placeholder="Search for any IP address or domain" />
      </div>
      <IPContainer className="z-10 fixed left-2/4 -mt-8" style={ipStyles}>
        <IPDetails section="IP ADDRESS" data="192.292.323.2" />
        <IPDetails section="LOCATION" data="Brooklyn, NY 10001" />
        <IPDetails section="TIMEZONE" data="UTC-05:00" />
        <IPDetails section="ISP" data="SpaceX Starlink" />
      </IPContainer>
      <div style={mapStyles}>
        <MapContainer />
      </div>
    </div>
  );
};

export default IndexPage;
