import axios from "../axios.js";

const postOutagesList = async (siteName, outages) => {
  try {
    const response = await axios.post(
      `site-outages/${siteName}`,
      JSON.stringify(outages),
      {
        headers: {
          "Content-Type": "applciation/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default postOutagesList;
