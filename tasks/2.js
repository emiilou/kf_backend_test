import axios from "../axios.js";

const getSiteInfo = async (siteName) => {
  try {
    const response = await axios.get(`site-info/${siteName}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default getSiteInfo;
