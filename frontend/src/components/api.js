import axios from "axios";
export default {
  addPerson: (person) =>
    axios({
      method: "POST",
      url: "/people/add",
      headers: {
        "content-type": "application/json",
      },
      data: person,
    }),
};
