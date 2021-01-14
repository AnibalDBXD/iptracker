const getIP = async (): Promise<string | void> => {
  try {
    const res = await fetch("https://checkip.amazonaws.com/");
    return await res.text();
  } catch (e) {
    return console.error(e);
  }
};
export default getIP;
