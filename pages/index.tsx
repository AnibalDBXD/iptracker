import { useEffect, useState } from "react";

import Form from "../components/Form";
import IPContainer from "../components/IPContainer";
import MapContainer from "../components/MapContainer";
import Title from "../components/Title";
import type { IP } from "../interfaces/app_interfaces";
import getIP from "../utils/getIP";

const ipStyles = {
  transform: "translate(-50%, 0)",
};

const mapStyles = {
  height: "77%",
};

const IndexPage: React.FC = (): JSX.Element => {
  const initialValue = {
    ip: "8.8.4.4",
    country: "United States",
    city: "Manhattan",
    latitude: 39.1836082,
    longitude: -96.5716694,
    isp: "Datacamp Limited",
    timezone: "America/Chicago",
  };

  const [IP, setIP] = useState<string>();
  const [IPINFO, setIPINFO] = useState<IP>(initialValue);

  useEffect(() => {
    getIP(IP).then((data) => data && setIPINFO(data));
  }, [IP]);

  return (
    <div className="font-sans h-screen w-screen">
      <div className="bg-hero text-center py-12 shadow">
        <Title>IP Adress Tracker</Title>
        <Form setIP={setIP} placeholder="Search for any IP address or domain" />
      </div>
      <IPContainer data={IPINFO} className="z-10 fixed left-2/4 -mt-8" style={ipStyles} />
      <div style={mapStyles}>
        <MapContainer lat={IPINFO.latitude} lng={IPINFO.longitude} />
      </div>
    </div>
  );
};

export default IndexPage;
