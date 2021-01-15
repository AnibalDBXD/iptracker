import GoogleMapReact from "google-map-react";

import Mark from "./icons/Mark";

type Props = {
  lat: number;
  lng: number;
};

const Map: React.FC<Props> = ({ lat, lng }): JSX.Element => {
  const latitude = Number(lat);
  const longitude = Number(lng);
  console.log(typeof latitude, latitude);
  console.log(typeof longitude, longitude);
  return (
    <GoogleMapReact
      center={{ lat: latitude, lng: longitude }}
      bootstrapURLKeys={{ key: "" }}
      defaultZoom={11}>
      <Mark lat={latitude} lng={longitude} />
    </GoogleMapReact>
  );
};

export default Map;
