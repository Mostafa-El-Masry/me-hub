import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aa60648a44d94a1ea549882f19490714",
  },
});
