import axios from "axios";
import { readFileSync } from "fs";

const instance = axios.create({
  baseURL: "https://api.krakenflex.systems/interview-tests-mock-api/v1/",
  timeout: 1000,
  headers: { "x-api-key": readFileSync("./api-key.txt").toString() },
});

export default instance;
