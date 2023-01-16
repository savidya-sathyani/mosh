import axios from "axios";

export default axios.create({
  baseURL: "https://moshhero.free.beeceptor.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
