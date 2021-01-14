import type { IP } from "../interfaces/app_interfaces";
const getIP = async (IP = ""): Promise<IP | void> => {
  const URL = `https://ipwhois.app/json/${IP}?objects=ip,country,city,timezone,isp,latitude,longitude`;
  try {
    const res = await fetch(URL);
    return await res.json();
  } catch (e) {
    return console.error(e);
  }
};
export default getIP;
