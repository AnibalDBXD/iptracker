import { CSSProperties } from "react";

import type { IP } from "../interfaces/app_interfaces";
import IPDetails from "./IPDetails";

type Props = {
  data: IP;
  className: string;
  style: CSSProperties;
};

const IPContainer: React.FC<Props> = ({ data, className, style }): JSX.Element => {
  return (
    <ul
      className={`md:w-9/12 w-2/5  bg-white shadow-lg rounded-lg flex flex-wrap overflow-hidden divide-x divide-gray-800 divide-opacity-25 ${className}`}
      style={style}>
      <li className="w-full overflow-hidden sm:w-full md:w-1/4 p-4">
        <IPDetails section="IP ADDRESS" data={data.ip} />
      </li>
      <li className="w-full overflow-hidden sm:w-full md:w-1/4 p-4">
        <IPDetails section="LOCATION" data={`${data.country} / ${data.city}`} />
      </li>
      <li className="w-full overflow-hidden sm:w-full md:w-1/4 p-4">
        <IPDetails section="TIMEZONE" data={data.timezone} />
      </li>
      <li className="w-full overflow-hidden sm:w-full md:w-1/4 p-4">
        <IPDetails section="ISP" data={data.isp} />
      </li>
    </ul>
  );
};

export default IPContainer;
