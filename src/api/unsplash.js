import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3a414fe02b5657c4848323d1d9bfaa7e921e531d84267bcc570e5f6243a960b6"
  }
});
