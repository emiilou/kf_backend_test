import getAllOutages from "./tasks/1.js";
import getSiteInfo from "./tasks/2.js";
import filterOutages from "./tasks/3.js";
import addSiteNameToOutages from "./tasks/4.js";
import postOutagesList from "./tasks/5.js";

const sitename = "norwich-pear-tree";
const dateFrom = "2022-01-01T00:00:00.000Z";

// task 1
const outages = await getAllOutages();

// task 2
const siteInfo = await getSiteInfo(sitename);

// task 3
const filteredOutages = await filterOutages(outages, siteInfo, dateFrom);

// task 4
const enhancedOutages = await addSiteNameToOutages(filteredOutages, siteInfo);

// task 5
await postOutagesList(sitename, enhancedOutages);
