const filterOutages = (outages, siteInfo, dateFrom) => {
  const siteDeviceIds = siteInfo.devices.map(({ id }) => id);
  const filtered = outages.filter(
    ({ id, begin }) =>
      siteDeviceIds.includes(id) && new Date(begin) >= new Date(dateFrom)
  );
  return filtered;
};

export default filterOutages;
