import axios from "axios";

export default axios.create(
  process.env.NODE_ENV === "development"
    ? { baseURL: "http://localhost:5000" }
    : {
        baseURL: "https://us-central1-phage-chooser.cloudfunctions.net/api",
      }
);
