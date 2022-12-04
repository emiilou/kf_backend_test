import axios from "../axios.js";

const getAllOutages = async () => {
  try {
    const response = await axios.get("outages");
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default getAllOutages;
