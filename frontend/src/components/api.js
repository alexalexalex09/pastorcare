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
  addNote: (note) =>
    axios({
      method: "POST",
      url: "/notes/add",
      headers: {
        "content-type": "application/json",
      },
      data: note,
    }),
};
