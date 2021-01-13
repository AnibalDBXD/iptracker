import GoogleMapReact from "google-map-react";

import Mark from "./icons/Mark";

const Map: React.FC = (): JSX.Element => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBmcql6sxiES3IDXOcvbRieCuqg4suFqxs" }}
      defaultCenter={{ lat: 59.95, lng: 30.33 }}
      defaultZoom={11}>
      <Mark lat={59.955413} lng={30.337844} />
    </GoogleMapReact>
  );
};

export default Map;
