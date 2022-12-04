const addSiteNameToOutages = (outages, siteInfo) => {
  const { devices } = siteInfo;

  const deviceMap = {};

  devices.forEach(({ id, name }) => {
    deviceMap[id] = name;
  });

  return outages.map((outage) => ({
    ...outage,
    name: deviceMap[outage.id],
  }));
};

export default addSiteNameToOutages;
